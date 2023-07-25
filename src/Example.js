import React from "react";

export default function example(props){
  if(props.example) {
  return (
    <div className="Example">
      <strong>Example: </strong> {props.example}
    </div>
  )} else {
    return null;
  }
}