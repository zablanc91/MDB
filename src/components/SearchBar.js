import React from 'react';

const SearchBar = (props) => {
    return  (
        <section className="searchbar-wrap">
            <input 
                type="text" 
                className="searchbar" 
                placeholder="Search for a movie, TV show, person..." 
                onChange={props.handleInput}
                onKeyPress={props.search} 
            />
        </section>
    );
}

export default SearchBar;