import React, {useState} from "react";

function ToyForm({toysArray, setToysArray}) {
  const [toyForm, setToyForm] = useState({name: "", image:""})

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
        body: JSON.stringify(toyForm)
      })
      .then(response => response.json())
      // .then(toyData => console.log(toyData))
      .then(toyData => {
        const newToy = [...toysArray, toyData]
        setToysArray(newToy)
        setToyForm({name: "", image:""})
      })
    
  }

function handleToyForm(e){
  const updatedForm = {...toyForm}
  updatedForm[e.target.name] = e.target.value 
  setToyForm(updatedForm)
}
// console.log(toyForm)
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyForm.name}
          onChange={handleToyForm}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyForm.image}
          onChange={handleToyForm}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
