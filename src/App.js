import React from "react";





function App() {

 const myArray= ["najib","hebrawi"];
 const myList= myArray.map((names)=><p>{names}</p>)
  return (
    <div className="App">
      <h1>{myList}</h1>
    </div>
  );
}

export default App;
