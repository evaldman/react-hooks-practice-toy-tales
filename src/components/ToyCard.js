import React from "react";

function ToyCard({id, name, image, likes, toysArray, setToysArray}) {

  function handleDelete(){
    // console.log(id)
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    })
    setToysArray(toysArray.filter((toy) => toy.id !== id))
  }
  function handleLikes(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: likes + 1})
    })
      .then(response => response.json())
      .then(likeData => {
        const updatedLikes = toysArray.map((toy) => {
          if (toy.id === likeData.id) {
            return likeData
          } else {
            return toy
          }
        })
        setToysArray(updatedLikes)
      })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete}className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
