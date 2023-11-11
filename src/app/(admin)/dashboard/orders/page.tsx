import { Badge } from "@/components/ui/badge";
import OrderItem from "@/components/ui/order-item";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";

const OrdersPage = async () => {
  const orders = await prismaClient.order.findMany({
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <PackageSearchIcon size={18} />
        Pedidos
      </Badge>

      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-bold">
          Pedidos encontrados: {orders.length}
        </p>
      </div>

      <div className="h-full overflow-auto">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
