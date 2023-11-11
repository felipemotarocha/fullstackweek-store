import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Category, Prisma } from "@prisma/client";

interface CategoriesTableProps {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: {
        select: {
          id: true;
        };
      };
    };
  }>[];
}

const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Porcentagem das vendas</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((categories) => (
          <TableRow key={categories.id}>
            <TableCell>{categories.name}</TableCell>
            <TableCell>{categories.products.length}</TableCell>
            <TableCell>0%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoriesTable;
