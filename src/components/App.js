import React from "react";
import { useState } from "react";


const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];

const App = () => {
  const [name, setSearchTerm] = useState("");



  return (
    <div id="main">
      <input
        type="text"
        id="search-input"
        onChange={(event)=> {
          setSearchTerm(event.target.value);
        }}
        
      />
      <p> Result</p>
      
      <ul> <li> {searchArray.filter((val)=> {
         if(name == ""){
          return( name
      )}
         else if(val.toLowerCase().includes(name.toLowerCase())){
            return val
          }
})}</li></ul>
    </div>
  );
};

export default App;
