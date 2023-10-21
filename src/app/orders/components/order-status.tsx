import { formatDate, orderStatusFormat } from "@/helpers";
import { OrderStatus as StatusEnum } from "@prisma/client";
interface OrderStatusProps {
  orderStatus: string;
  orderDate: Date;
}

const OrderStatus = ({ orderDate, orderStatus }: OrderStatusProps) => {
  return (
    <div className="flex max-w-xs gap-10">
      <div className="flex flex-col text-start text-xs font-bold">
        <p>STATUS</p>
        {orderStatus === StatusEnum.PAYMENT_CONFIRMED ? (
          <p className="text-purpleBadge">{orderStatusFormat(orderStatus)}</p>
        ) : (
          <p className="text-red-400">{orderStatusFormat(orderStatus)}</p>
        )}
      </div>
      <div className="flex flex-col text-start text-xs">
        <p className=" font-semibold">DATA</p>
        <p className="opacity-60">{formatDate(orderDate)}</p>
      </div>
      <div className="flex flex-col text-start text-xs">
        <p className=" font-semibold">PAGAMENTO</p>
        <p className="opacity-60">Cartão</p>
      </div>
    </div>
  );
};

export default OrderStatus;
