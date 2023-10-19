import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function SearchBook() {
  return (

    <div className="search__book--link cursor-pointer">
            <figure className="book__image--wrapper !h-20 !w-20 !min-w-[80px] ">
              <img
                className="book__image "
                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&amp;token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
                alt="book"
              />
            </figure>
            <div>
              <div className="search__book--title">
                How to Win Friends and Influence People in the Digital Age
              </div>
              <div className="search__book--author">Dale Carnegie</div>
              <div className="search__book--duration">
                <div className="recommended__book--details">
                  <div className="recommended__book--details-icon">
                    <AiOutlineClockCircle />
                  </div>
                  <div className="recommended__book--details-text">03:24</div>
                </div>
              </div>
            </div>
          </div>
  )

}
