import React from 'react'
import SearchBar from './search-bar'
import SearchResults from './search-results'
import { prismaClient } from "@/lib/prisma";

const Search = async () => {
  const products = await prismaClient.product.findMany({})
  console.log(products)
  return (
    <div className='flex flex-col relative'>
        <SearchBar>
          <SearchResults products={products}/>
        </SearchBar>
    </div>
  )
}

export default Search