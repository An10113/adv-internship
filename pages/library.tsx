import SearchBar from '@/components/SearchBar'
import SideBar from '@/components/SideBar'
import { useRouter } from 'next/router'
import React from 'react'

export default function library() {
    const router = useRouter()

  return (
    <div className='wrapper'>
        <SearchBar />
        <SideBar route={2}/>
        <div className='max-w-[1070px] w-full mx-auto px-6'>
            <div className='py-6 w-full'>
                Library
            </div>
        </div>
    </div>
  )
}
