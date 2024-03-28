"use client";

import { addProductToWishlist } from "@/actions/Wishlist";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import LoadingButton from "../../../../../components/ui/loading-button";

interface WishButtonProps {
    productId: string;
}
const WishButton = ({ productId }: WishButtonProps) => {
    const { data: session } = useSession();

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const handleAddToWishlist = async () => {
        setLoading(true);
        if (!session || !session.user) {
            toast("Você precisa estar logado para adicionar aos favoritos", {
                action: {
                    label: "Login",
                    onClick: () => {
                        signIn();
                    }
                },
                classNames: {
                    toast: "bg-red-500 border-red-500",
                    title: "text-white",
                    actionButton: "!text-red-500 !bg-white font-bold",
                }
            });

            setLoading(false);
            return;
        }

        await addProductToWishlist(session.user.id, productId);

        toast("Produto adicionado aos favoritos", {
            action: {
                label: "Ver favoritos",
                onClick: () => {
                    router.push("/wish-list");
                }
            },
        }
        );

        setLoading(false);
    };

    return (
        <LoadingButton
            loading={loading}
            textWaiting="Adicionando aos favoritos"
            className="uppercase"
            onClick={handleAddToWishlist}
        >
            <StarIcon />
            Favoritos
        </LoadingButton>
    );
}

export default WishButton;