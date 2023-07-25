import React from "react";

export default function example(props){
  if(props.example) {
  return (
    <div className="Example">
      "{props.example}"
    </div>
  )} else {
    return null;
  }
}