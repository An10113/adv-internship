import { useRouter } from 'next/router'
import React from 'react'

export default function Id(){
    const router = useRouter()
    return (
        <div className='max-w-[1070px] w-full mx-auto px-6'>
            <div className='py-6 w-full'>
                <div className='inner__wrapper'>
                    <div className='inner__book'>
                    <div className="inner-book__title">How to Win Friends and Influence People in the Digital Age </div>
                    <div className="inner-book__author">Dale Carnegie</div>
                    <div className="inner-book__sub--title">Time-tested advice for the digital age</div>

                    </div>
                <div className="inner-book--img-wrapper">
                    <figure className="book__image--wrapper h-[300px] w-[300px] min-w-[300px]">
                        <img className="book__image block" src="" alt="book" />
                    </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
