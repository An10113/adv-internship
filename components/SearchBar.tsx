import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

export default function SearchBar() {
  const [search, setSearch] = useState<any>("");
  function handleDelete() {
    if (search.length !== 0) {
      setSearch("");
    }
  }
  return (
    <div className="search__background">
      <div className="search__wrapper relative">
        <figure>
          <img src="logo" alt="" />
        </figure>
        <div className="search__content">
          <div className="search">
            <div className="search__input--wrapper">
              <input
                value={search}
                className="search__input"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for books"
                type="text"
              />
              <div className="search__icon" onClick={handleDelete}>
                {search.length === 0 ? <BiSearch /> : <FaTimes />}
              </div>
            </div>
          </div>
        </div>
        <div className="search__books--wrapper">
          <a className="search__book--link" href="/book/5bxl50cz4bt">
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
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M13 7h-2v6h6v-2h-4z"></path>
                    </svg>
                  </div>
                  <div className="recommended__book--details-text">03:24</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
