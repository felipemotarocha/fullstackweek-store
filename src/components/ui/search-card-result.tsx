'use client'
import { ProductWithTotalPrice } from '@/helpers/product'
import React from 'react'
import Image from 'next/image'
import { convertCurrencyToReal } from '@/helpers/convert-currency'
import Link from 'next/link'
import useSearch from '@/hooks/use-search'

const SearchCardResult = ({ product }: {product: ProductWithTotalPrice | undefined}) => {
  const { setSearch } =  useSearch()

  if (!product) {
    return null
  }

  return (
    <Link
      href={`/product/${product.slug}`}
      onClick={() => setSearch('')}
      key={product.id}
      className='flex gap-4'>
      <div className='bg-accent w-14 h-14 rounded-md flex items-center justify-center'>
        <Image 
          src={product.imageUrls[0]}
          sizes='100vw'
          alt={product.description}
          width={0}
          height={0}
          className='w-10 h-10 aspect-square'
          />
      </div>
      <div>
        <p className='text-black opacity-70'>{product.name}</p>
        <span className='text-primary font-bold text-md pr-2'>{convertCurrencyToReal(product.totalPrice)}</span>
        <span className='text-black opacity-60 line-through text-xs'>{convertCurrencyToReal(Number(product.basePrice))}</span>
      </div>
    </Link>
  )
}

export default SearchCardResult