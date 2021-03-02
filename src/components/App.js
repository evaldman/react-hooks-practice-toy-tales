import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysArray, setToysArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(toysData => setToysArray(toysData))

  }, [])
  // console.log(toysArray)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
      toysArray={toysArray} 
      setToysArray={setToysArray}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysArray={toysArray} setToysArray={setToysArray}/>
    </>
  );
}

export default App;
