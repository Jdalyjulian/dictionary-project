import React from "react";

export default function synonyms(props){
    if(props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong> 
        <ul className="Synonyms-list">
        {props.synonyms.map(function(synonym, index){
          return(
            <li key={index}>
              {synonym}
            </li>
          )
        })}
        </ul>
      </div>
    )} else {
      return null;
    }
  }