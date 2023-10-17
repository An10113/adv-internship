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
      <div className="search__wrapper">
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
      </div>
    </div>
  );
}
