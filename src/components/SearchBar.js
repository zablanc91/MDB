import React from 'react';

const SearchBar = () => {
    return  (
        <section className="searchbar-wrap">
            <input type="text" className="searchbar" placeholder="Search for a movie, TV show, person..."></input>
        </section>
    );
}

export default SearchBar;