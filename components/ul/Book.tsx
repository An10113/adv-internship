import React from 'react'
import { AiFillStar } from 'react-icons/ai'
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

export default function Book({ id, title, author, subTitle, averageRating, imageLink, subscriptionRequired }: Book) {
    return (
            <a className="for-you__recommended--books-link" href={`/book/${id}`}>
                {/* <audio src="" alt="book"> */}
                {subscriptionRequired && <div className="book__pill book__pill--subscription-required">Premium</div>}
                <figure className="book__image--wrapper mb-2" >
                    <img className="book__image" src={imageLink} alt="book" />
                </figure>
                <div className="recommended__book--title">{title}</div>
                <div className="recommended__book--author">{author}</div>
                <div className="recommended__book--sub-title">{subTitle}</div>
                <div className="recommended__book--details-wrapper">
                    <div className="recommended__book--details">
                        <div className="recommended__book--details-icon">
                            <AiFillStar />
                        </div>
                        <div className="recommended__book--details-text">{`${averageRating}`}</div>
                        <div className="recommended__book--details-icon">
                            <AiFillStar />
                        </div>
                        <div className="recommended__book--details-text">{`${averageRating}`}</div>
                    </div>
                </div>
            </a>
    )
}
