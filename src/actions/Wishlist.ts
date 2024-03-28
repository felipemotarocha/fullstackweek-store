"use server";

import { prismaClient } from "@/lib/prisma";

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
