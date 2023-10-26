import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";
import { Accordion } from "@/components/ui/accordion";

export const dynamic = "force-dynamic";

const OrderPage = async ({ searchParams }:{searchParams?: {orderId: string}}) => {
  const session = await getServerSession(authOptions);

  const orderId = searchParams?.orderId;

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
      </div>
    );
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="p-5">
      <Badge variant="heading">
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </Badge>

      <div className="mt-5">
          <Accordion type="single" className="w-full flex flex-col gap-5" collapsible defaultValue={orderId}>
              {orders.map(order =>(
                  <OrderItem key={order.id} order={order}/>
              ))}
          </Accordion>
      </div>
    </div>
  );
}

export default OrderPage;
