import SearchBar from '@/components/SearchBar'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'
import { BsBook, BsBookmark, BsLightbulb, BsMic } from 'react-icons/bs'

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
            const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id.id}`);
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
                    <div className='inner__wrapper'>
                        <div className='inner__book'>
                            <div className="inner-book__title">{data?.title}</div>
                            <div className="inner-book__author">{data?.author}</div>
                            <div className="inner-book__sub--title">Time-tested advice for the digital age</div>
                            <div className="inner-book__wrapper">
                                <div className="inner-book__description--wrapper">
                                    <div className="inner-book__description">
                                        <div className="inner-book__icon w-full h-full">
                                            <AiOutlineStar  size={24} />
                                        </div>
                                        <div className="inner-book__key--ideas">
                                            {`${data?.averageRating} (${data?.totalRating} ratings )`}
                                        </div>
                                    </div>
                                    <div className="inner-book__description">
                                        <div className="inner-book__icon w-full h-full">
                                            <AiOutlineClockCircle  size={24}/>
                                        </div>
                                        <div className="inner-book__key--ideas">
                                            8 Key ideas
                                        </div>
                                    </div>
                                    <div className="inner-book__description">
                                        <div className="inner-book__icon w-full h-full">
                                        <BsMic  size={24}/>
                                        </div>
                                        <div className="inner-book__key--ideas">
                                            {data?.type}
                                        </div>
                                    </div>
                                    <div className="inner-book__description">
                                        <div className="inner-book__icon">
                                            <BsLightbulb size={24}/>
                                        </div>
                                        <div className="inner-book__key--ideas">
                                            {`${data?.keyIdeas} key ideas`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-book__read--btn-wrapper">
                                <button className="inner-book__read--btn">
                                    <div className="inner-book__read--icon">
                                        <BsBook />
                                    </div>
                                    <div className="inner-book__read--text">Read</div>
                                </button>
                                <button className="inner-book__read--btn">
                                    <div className="inner-book__read--icon">
                                        <BsMic />
                                    </div>
                                    <div className="inner-book__read--text">Listen</div>
                                </button>
                            </div>
                            <div className="inner-book__bookmark">
                                <div className="inner-book__bookmark--icon">
                                    <BsBookmark />
                                </div>
                                <div className="inner-book__bookmark--text">Add title to My Library</div>
                            </div>
                            <div className="inner-book__secondary--title">What's it about?</div>
                            <div className="inner-book__tags--wrapper">
                                {data?.tags.map(tag =><div className="inner-book__tag">{tag}</div> )}
                            </div>
                            <div className="inner-book__book--description">
                                {data?.bookDescription}
                            </div>
                            <h2 className="inner-book__secondary--title">
                                About the author
                            </h2>
                            <div className="inner-book__author--description">
                            {data?.authorDescription}
                            </div>
                        </div>
                        <div className="inner-book--img-wrapper">
                            <figure className="h-[300px] w-[300px] min-w-[300px]">
                                <img className="book__image block" src={data?.imageLink} alt="book" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
