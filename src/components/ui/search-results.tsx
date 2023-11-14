'use client'
import React from 'react'
import { computeProductTotalPrice } from '@/helpers/product'
import SearchCardResult from './search-card-result'
import { Product } from '@prisma/client'
import useSearch from '@/hooks/use-search'

interface SearchResultsProps {
  products: Product[]
}

const SearchResults = ({ products }: SearchResultsProps ) => {
  const { deferredSearch } = useSearch();
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([])

  
  React.useEffect(() => {
    const filtered = products.filter((product) => product.name.toLowerCase().includes(deferredSearch.toLowerCase()) )
    setFilteredProducts(filtered)
  }, [deferredSearch, products])
  
  if (!deferredSearch) return null
  
  return (
    <ul className='p-5 bg-slate-50 flex flex-col gap-5 absolute w-[calc(100%-2.5rem)] z-10 max-h-80 overflow-scroll top-16 left-5 box-border rounded-md'>
      { 
        deferredSearch && filteredProducts.length !== 0 ?
        filteredProducts?.map((product) => (
          <li key={product.id}>
            <SearchCardResult product={computeProductTotalPrice(product)} />
          </li>
        ))
        : <li>
            <p className='text-accent text-sm font-semibold'>
              {`Não encontramos nenhuma sugestão :(`}
            </p>
          </li>
      }
    </ul>
  )
}

export default SearchResults