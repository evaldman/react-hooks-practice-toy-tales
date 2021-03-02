import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysArray, setToysArray}) {
  const displayToys = toysArray.map((toy) => {
    return (
      <ToyCard
      key={toy.id}
      id={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      toysArray={toysArray}
      setToysArray={setToysArray}
        />
    )
  })
  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
