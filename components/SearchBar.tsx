import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import SearchBook from "./ul/SearchBook";
interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: Number;
  averageRating: Number;
  keyIdeas: Number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}
export default function SearchBar() {
  const [search, setSearch] = useState<any>("");
  const [isTyping, setIsTyping] = useState(false);
  const [data, setData] = useState<Book[]>();
  function handleDelete() {
    if (search.length !== 0) {
      setSearch("");
    }
  }
  useEffect(() => {
    if (search === "") {
      return;
    }
    // setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`
        );
        const json = await response.json();
        console.log(json);
        setData(json);
        fetchData();
      };
    // }, 0);
  }, [search]);
  return (
    <div className="search__background">
      <div className="search__wrapper relative">
        <figure>
          <img src="" alt="" />
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
          {data?.map((book) => (
            <SearchBook />
          ))}
        </div>
      </div>
    </div>
  );
}
