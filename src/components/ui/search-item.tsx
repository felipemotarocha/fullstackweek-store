import { Product } from "@prisma/client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";

import { ScrollArea } from "./scroll-area";

interface SearchItemsProps {
  products: Product[];
}

const SearchItems = ({ products }: SearchItemsProps) => {
  return (
    <div>
      <Command className="w-auto rounded-lg border shadow-md">
        <CommandInput placeholder="O que você procura?" />
        <CommandList>
          <CommandEmpty>Não encontramos nenhum resultado.</CommandEmpty>
          <CommandGroup heading="Sugestões">
            <ScrollArea className="h-[0px] w-auto rounded-md border">
              {products?.map((product) => (
                <CommandItem key={product.id} value={product.name}>
                  {product.name}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default SearchItems;
