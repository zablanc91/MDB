import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import Popup from './Popup';
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

    //function to make API call after user hits enter in SearchBar, update our state with the search results
    const search = (e) => {
        if(e.key === "Enter"){
            axios(APIkey + '&s=' + state.searchTerm).then((data) => {
                let results = data.data.Search;
                setState( (prevState) => {
                    return {...prevState, results};
                });
            });
        }
    }

    //function to set our state's selected movie when a Result is clicked, will display Popup with more information
    const openPopup = (id) => {
        axios(APIkey + "&i=" + id).then((data) => {
            let selected = data.data;
            setState( (prevState) => {
                return {...prevState, selected};
            });
        });
    }

    //set state's selected value to false in order to unrender the Popup
    const closePopup = () => {
        setState(prevState => {
            return {...prevState, selected: {}};
        });
    }

    //only render Popup if our state's selected field is set
    return(
        <div>
            <header>
                <h1>MDB placeholder</h1>
            </header>
            <main>
                <SearchBar handleInput={handleInput} search={search} />
                <Results results={state.results} openPopup={openPopup} />

                {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
            </main>
        </div>
    );
};

export default App;