'use client'
import useSearch from '@/hooks/use-search'
import { SearchIcon } from 'lucide-react'
import React, { ReactNode } from 'react'

const SearchBar = ({children}: {children: ReactNode}) => {
  const { search, onChange } = useSearch()
  
  return (
    <div className='p-5 w-full'>
      <div className='bg-white rounded-md flex justify-between items-center px-5'>
        <input
          className='bg-transparent focus:outline-none py-2 w-[95%] text-secondary text-sm'
          type="text"
          id='search-bar'
          name='search-bar'
          value={search}
          onChange={onChange}
          spellCheck={false}
        />
        <SearchIcon color='#acacac' />
      </div>
      {children}
    </div>
  )
}

export default SearchBar