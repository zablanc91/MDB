import React from 'react';

const Result = (props) => {
    return(
        <div className="result">
            <h3>{props.result.Title}</h3>
            <img src={props.result.Poster} alt={`Poster for ${props.result.Title}`} />
        </div>
    );
}

export default Result;