
import React, { useEffect, useState } from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import AuthModal from './modals/AuthModal'
import { openLoginModal } from '@/Redux/ModalSlice'
import { useDispatch, useSelector } from 'react-redux'
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
const formatTime = (time: number) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes} mins ${formatSeconds} sec`;
  }
  return "00:00";
};

export default function Selected(){
  const [duration, setDuration] = useState(0);
  const [data, setData] = useState<Book>()
  const router = useRouter()
  const user = useSelector((state:any) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected');
      const json = await response.json();
      const data = json[0]
      setData(data)
    };
    fetchData();
  }, []);
  useEffect(() => {
    const audio = new Audio(data?.audioLink)
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    }
}, [data]);

  function hanldeReading(){
    console.log(user)
    if(user.email === null){
      dispatch(
        openLoginModal()
      )
      return
    }
    console.log("logged in")
    router.push(`/player/${data?.id}`);
  }
  return (
    <>
      <AuthModal />
      <div className='for-you__wrapper'>
        <div className="for-you__title">Selected just for you</div>
        <a className="selected__book" href="/book/f9gy1gpai8">
          <div className="selected__book--sub-title">
            {data?.subTitle}
          </div>
          <div className="selected__book--line">
          </div>
          <div className="selected__book--content">
            <figure className="book__image--wrapper">
              {/* // style="height: 140px; width: 140px; min-width: 140px;" */}
              <img className="book__image" src={data?.imageLink} alt="book" />
            </figure>
            <div className="selected__book--text">
              <div className="selected__book--title">{data?.title}</div>
              <div className="selected__book--author">{data?.author}</div>
              <div className="selected__book--duration-wrapper">
                <div className="selected__book--icon" onClick={hanldeReading}>
                  <BsFillPlayCircleFill size={40} />
                </div>
                <div className="selected__book--duration">{formatTime(duration)}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}