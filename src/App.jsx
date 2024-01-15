import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-3 text-red-500 ">
        My Cards
      </h1>
      <Card
        imageUrl="../public/images/MyImage.jpg"
        heading="Ranjan Gupta"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum libero blanditiis"
      />
    </div>
  );
}

export default App;
