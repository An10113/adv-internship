import React, { useEffect, useState } from 'react'
import Book from './ul/Book'
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

export default function Suggested() {
    const [data, setData] = useState<Book[]>([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested');
        const json = await response.json();
        setData(json)
      };
      fetchData();
    }, []);
  return (
    <div>
        <div className="for-you__title">Suggested Books</div>
        <div className="for-you__sub--title">Browse those books</div>
        <div className='for-you__recommended--books'>

        {data ? data.map(data => <Book key={data.id} subscriptionRequired={data.subscriptionRequired} id={data.id} title={data.title} author={data.author} subTitle={data.subTitle} averageRating={data.averageRating} imageLink={data.imageLink} audioLink={data.audioLink} totalRating={data.totalRating} keyIdeas={data.keyIdeas} type={''} status={''} summary={''} tags={[]} bookDescription={''} authorDescription={''} /> ) : <></>}
        </div>
    </div>
  )
}
