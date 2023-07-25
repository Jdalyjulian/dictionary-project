import React from "react";

export default function Phonetics (props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <h3>/{props.phonetics}/</h3>
    </div>
  )}