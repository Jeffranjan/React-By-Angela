import React from "react";
import Card from "./Components/Card";
import Details from "./Components/Details";
import EmojiCard from "./Components/EmojiCard";
import emojipedia from "./Components/Emojipedia";
import RednderConditionally from "./Components/Login";

function CreateCard(Details) {
  return (
    <Card
      key={Details.id}
      heading={Details.heading}
      para={Details.para}
      img={Details.img}
    />
  );
}

function createEntry(emojipedia) {
  return (
    <EmojiCard
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

// const NewEmojipedia = emojipedia.map((emojipedia) => {
//   return emojipedia.meaning.substring(0, 100);
// });

// console.log(NewEmojipedia);

let arr = [23, 12, 56, 85, 12];

let Square = arr.map((num) => num * 2);
console.log(Square);

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-3 text-red-500 ">
        My Cards
      </h1>
      <div className="flex flex-wrap justify-center">
        {Details.map(CreateCard)}
      </div>
      <dl className="flex flex-wrap justify-between my-[4rem] mx-auto max-w-screen-lg">
        {emojipedia.map(createEntry)}
      </dl>

      {/* <div className="flex flex-wrap flex-auto justify-center">
        <Card
          imageUrl={Details[0].img}
          heading={Details[0].heading}
          paragraph={Details[0].para}
        />
        <Card
          imageUrl={Details[1].img}
          heading={Details[1].heading}
          paragraph={Details[1].para}
        />
        <Card
          imageUrl={Details[2].img}
          heading={Details[2].heading}
          paragraph={Details[2].para}
        />
        <Card
          imageUrl={Details[3].img}
          heading={Details[3].heading}
          paragraph={Details[3].para}
        />
      </div> */}
      <RednderConditionally />
    </div>
  );
}

export default App;
