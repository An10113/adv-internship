import SearchBar from '@/components/SearchBar'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'
import { BsBook, BsBookmark, BsLightbulb, BsMic } from 'react-icons/bs'
import {CgPlayButton} from "react-icons/cg"

interface Book {
    id: string
    author: string
    title: string
    subTitle: string
    imageLink: string
    audioLink: string
    totalRating: Number
    averageRating: Number
    keyIdeas: Number
    type: string
    status: string
    subscriptionRequired: boolean
    summary: string
    tags: string[]
    bookDescription: string
    authorDescription: string
}

export default function Id() {
    const router = useRouter()
    const id = useParams()
    const [data, setData] = useState<Book>()
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id?.id}`);
            const json = await response.data
            setData(json)
            // console.log(data)
        };
        fetchData();
    }, []);
    return (
        <>
            <SearchBar />
            <div className='max-w-[1070px] w-full mx-auto px-6'>
                <div className='py-6 w-full'>
                    <div className="summary">
                        <div className="audio__book--summary text-[16px]">
                            <div className="audio__book--summary-title">
                                <b>{data?.title}</b>
                            </div>
                            <div className="audio__book--summary-text">
                                {data?.summary}
                            </div>
                        </div>
                        <div className="audio__wrapper">
                            <audio src={data?.audioLink}></audio>
                            <div className="audio__track--wrapper">
                                <figure className="audio__track--image-mask">
                                    <figure className="md:book__image--wrapper h-12 w-12 in-w-[48px]">
                                        <img className="book__image book" src={data?.imageLink} alt="book" />
                                    </figure>
                                </figure>
                                <div className="audio__track--details-wrapper">
                                    <div className="audio__track--title">{data?.title}</div>
                                    <div className="audio__track--author">{data?.author}</div>
                                </div></div>
                            <div className="audio__controls--wrapper">
                                <div className="audio__controls">
                                    <button className="audio__controls--btn">
                                    </button>
                                    <button className="audio__controls--btn audio__controls--btn-play">
                                        <CgPlayButton />
                                    </button>
                                </div>
                            </div>
                            <div className="audio__progress--wrapper">
                                <div className="audio__time">00:00</div>
                                <input type="range" className="audio__progress--bar" max="204.048" />
                                <div className="audio__time">03:24</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
