import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}></img>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "kimbap",
    image:
      "data:image/jpeg;base64,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",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
