import React from "react";

function EmojiCard({ emoji, name, meaning }) {
  return (
    <div>
      <div className="text-center w-[20rem] h-[14rem] mb-[3rem] p-8 rounded-[3px] shadow-lg bg-[#c0d2d4]">
        <dt>
          <span className="font-[200%]">{emoji}</span>
          <span>{name}</span>
        </dt>
        <dd>{meaning}</dd>
      </div>
    </div>
  );
}

export default EmojiCard;
