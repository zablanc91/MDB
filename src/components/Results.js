import React from 'react';
import Result from './Result';

const Results = (props) => {
    return(
        <section className="results">
            {props.results.map(result => {
                return <Result result={result} openPopup={props.openPopup} key={result.imdbID} />
            })}
        </section>
    );
}

export default Results;