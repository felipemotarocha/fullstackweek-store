"use client";

import { addProductToWishlist, getUserWishlist } from "@/actions/Wishlist";
import { StarIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import LoadingButton from "../../../../../components/ui/loading-button";
import { WishList } from "@prisma/client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import error from "next/error";

interface WishButtonProps {
  productId: string;
  wishLists: WishList[];
}
const wishListFormSchema = z.object({
  wishlists: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type WishListFormData = z.infer<typeof wishListFormSchema>;
const WishButton = ({ productId, wishLists }: WishButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const { data: session } = useSession();

  const form = useForm<WishListFormData>({
    resolver: zodResolver(wishListFormSchema),
    defaultValues: {
      wishlists: [],
    },
  });

  const router = useRouter();
  const disableButton = !session || !session.user;

  const [loading, setLoading] = useState(false);

  const handleAddToWishlist = async (data: WishListFormData) => {
    setLoading(true);
    try {
      if (!session || !session.user) {
        toast("Você precisa estar logado para adicionar aos favoritos", {
          action: {
            label: "Login",
            onClick: () => {
              signIn();
            },
          },
          classNames: {
            toast: "bg-red-500 border-red-500",
            title: "text-white",
            actionButton: "!text-red-500 !bg-white font-bold",
          },
        });

        setLoading(false);
        return;
      }

      data.wishlists.forEach((wishlistId) => {
        console.log("forEach:",wishlistId)
        addProductToWishlist(session.user.id, productId, wishlistId);
      });

      form.reset()
      setDialogIsOpen(false);
      router.refresh();

      toast("Produto adicionado aos favoritos", {
        action: {
          label: "Ver favoritos",
          onClick: () => {
            router.push("/wish-list");
          },
        },
      });
    } catch (error) {
      console.log(error);
      toast("Desculpe, algo deu errado! ;(", {
        classNames: {
          toast: "bg-red-500 border-red-500",
          title: "text-white",
          actionButton: "!text-red-500 !bg-white font-bold",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <LoadingButton
          loading={loading}
          textWaiting="Adicionando aos favoritos"
          className="uppercase"
          disabled={disableButton}
          // onClick={handleAddToWishlist}
        >
          <StarIcon
            className={"h-5 w-5 " + (wishLists.length > 0 && "fill-white")}
          />
          Favoritos
        </LoadingButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar produto aos favoritos</DialogTitle>
          <DialogDescription>
            Selecione em qual lista você deseja favoritar esse produto.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAddToWishlist)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="wishlists"
              render={() => (
                <FormItem>
                  {wishLists.map((wishlist) => (
                    <FormField
                      key={wishlist.id}
                      control={form.control}
                      name="wishlists"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={wishlist.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(wishlist.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        wishlist.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== wishlist.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {wishlist.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-start">
              <LoadingButton
                type="submit"
                loading={loading}
                textWaiting="Salvando"
                className="uppercase"
              >
                Salvar
              </LoadingButton>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WishButton;
