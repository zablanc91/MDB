import React from 'react';

const Result = (props) => {
    return(
        <div className="result" onClick={() => props.openPopup(props.result.imdbID)} >
            <img src={props.result.Poster} alt={`Poster for ${props.result.Title}`} />
            <h3>{props.result.Title} ({props.result.Year})</h3>
        </div>
    );
}

export default Result;