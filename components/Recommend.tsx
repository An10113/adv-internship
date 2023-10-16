
import React, { useEffect, useState } from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
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

// export const getServerSideProps = (async (context) => {
//   const res = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
//   const repo = await res.json()
//   const data = repo[0]
//   return { props: { data } }
// }) satisfies GetServerSideProps<{
//   data: Book
// }>
// { id, author,title,subTitle,imageLink,audioLink,totalRating,averageRating,keyIdeas,type,status,subscriptionRequired,summary, tags, bookDescription, authorDescription }


export default function Recommend() {
  const [data, setData] = useState<Book[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended');
      const json = await response.json();
      setData(json)
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="for-you__title">Recommended For You</div>
      <div className="for-you__sub--title">We think you’ll like these</div>
      <div className='for-you__recommended--books'>
        {data ? data.map(data => <Book key={data.id} subscriptionRequired={data.subscriptionRequired} id={data.id} title={data.title} author={data.author} subTitle={data.subTitle} averageRating={data.averageRating} imageLink={data.imageLink} audioLink={data.audioLink} totalRating={data.totalRating} keyIdeas={data.keyIdeas} type={''} status={''} summary={''} tags={[]} bookDescription={''} authorDescription={''} /> ) : <></>}
      </div>
    </>
  )
}