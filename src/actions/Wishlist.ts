"use server";

import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const addProductToWishlist = async (
    userId: string,
    productId: string,
    wishlistId?: string,
) => {
    let wishlist;

    if (wishlistId) {
        wishlist = await prismaClient.wishList.findFirstOrThrow({
            where: {
                userId: userId,
                id: wishlistId,
            },
        });
    } 
    
    if(!wishlistId) {
        wishlist = await prismaClient.wishList.findFirst({
            where: {
                userId: userId,
            },
        });

        if (!wishlist) {
            wishlist = await prismaClient.wishList.create({
                data: {
                    userId: userId,
                    name: 'Favoritos',
                },
            });
        }
    }

    await prismaClient.product.update({
        where: {
            id: productId,
        },
        data: {
            wishLists: {
                connect: {
                    id: wishlist!.id,
                },
            },
        },
    });
};

export const getUserWishlist = async()=>{
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return []
      }
    const userWishlists = await prismaClient.wishList.findMany({
        where:{
            userId: session.user.id
        }
    })
    return userWishlists
}