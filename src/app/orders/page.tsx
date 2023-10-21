import TextBadge from "@/components/ui/text-badge";
import OrderItem from "./components/order-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";

export const dynamic = "force-dynamic"

const Orders = async () => {
  const user = getServerSession(authOptions);
  if (!user) {
    return <p>Acesso negado</p>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
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
    <div className="mx-auto flex max-w-[1024px] flex-col gap-5 p-7">
      <TextBadge icon="catalog">Meus Pedidos</TextBadge>
      {orders.map((order) => (
        <OrderItem key={order.OrderNumber} order={order} />
      ))}
    </div>
  );
};

export default Orders;
