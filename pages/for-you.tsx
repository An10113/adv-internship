import Recommend from '@/components/Recommend';
import SearchBar from '@/components/SearchBar';
import Selected from '@/components/Selected';
import SideBar from '@/components/SideBar';
import Suggested from '@/components/Suggested';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


export default function Foryou() {
  return (
    <div className='wrapper'>
        <SearchBar />
        <SideBar route={1}/>
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
