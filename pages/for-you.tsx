import Recommend from '@/components/Recommend';
import SearchBar from '@/components/SearchBar';
import Selected from '@/components/Selected';
import Suggested from '@/components/Suggested';
import { useRouter } from 'next/router'
import React from 'react'

export default function Foryou() {
  return (
    <div>
        <SearchBar />
        <div className='max-w-[1070px] w-full mx-auto px-6'>
            <div className='py-6 w-full'>
                <Selected />
                <Recommend />
                <Suggested />
            </div>
        </div>
    </div>
  )
}
