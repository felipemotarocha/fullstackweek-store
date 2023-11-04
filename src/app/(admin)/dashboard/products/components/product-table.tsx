import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";

interface ProductTableProps {
  products: (ProductWithTotalPrice &
    Prisma.ProductGetPayload<{
      include: {
        category: true;
      };
    }>)[];
}

const ProductTable = (props: ProductTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Preço Cheio</TableHead>
          <TableHead>Preço com Desconto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category.name}</TableCell>
            <TableCell>R$ {product.basePrice.toFixed(2)}</TableCell>
            <TableCell>R$ {product.totalPrice.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
