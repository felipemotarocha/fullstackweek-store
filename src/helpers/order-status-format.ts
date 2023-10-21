import { OrderStatus } from "@prisma/client";

export const orderStatusFormat = (status: string) => {
  return {
    [OrderStatus.PAYMENT_CONFIRMED]: "PAGO",
    [OrderStatus.WAITING_FOR_PAYMENT]: "Aguardando Pagamento",
  }[status];
};
