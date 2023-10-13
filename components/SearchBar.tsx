import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {
    return (
        <div className='search__background'>
            <div className='search__wrapper'>
                <figure><img src="logo" alt="" /></figure>
                <div className='search__content'>
                    <div className="search">
                        <div className="search__input--wrapper">
                            <input className="search__input" placeholder="Search for books" type="text" />
                            <div className="search__icon">
                                <BiSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
