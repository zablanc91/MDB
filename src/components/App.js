import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { APIkey } from '../config/keys';
import axios from 'axios';

const App = () => {
    //need Hook for state to tell us what is searched, the results pulled from the API, and what the user selected/clicked
    const [state, setState] = useState({
        searchTerm: "",
        results: [],
        selected: {}
    });

    //function to update state when user inputs new search term
    const handleInput = (e) => {
        let searchTerm = e.target.value;
        setState( (prevState) => {
            return {...prevState, searchTerm};
        });
    }

    //function to make API call after user hits enter in SearchBar
    const search = (e) => {
        if(e.key === "Enter"){
            axios(APIkey + '&s=' + state.searchTerm).then((data) => {
                console.log(data);
            });
        }
    }

    return(
        <div>
            <header>
                <h1>MDB placeholder</h1>
            </header>
            <main>
                <SearchBar handleInput={handleInput} search={search} />
            </main>
        </div>
    );
};

export default App;