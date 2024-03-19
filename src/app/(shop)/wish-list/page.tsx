import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { Heart } from "lucide-react";
import { getServerSession } from "next-auth";

async function WishList() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">
          Faça login para ver a sua lista de desejos
        </p>
      </div>
    );
  }
  return (
    <div className="p-5 lg:container lg:mx-auto lg:py-10">
      <Badge
        className="w-fit gap-1 border-r-2 border-primary px-3 py-1 text-sm font-semibold uppercase"
        variant="outline"
      >
        <Heart size={16} />
        Meus Pedidos
      </Badge>
    </div>
  );
}

export default WishList;
