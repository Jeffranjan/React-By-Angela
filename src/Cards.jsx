import React from "react";

<card name="Ranjan" age="21" Email="r@r.com" />;

function Card(props) {
  return (
    <div>
      <h1>
        {props.name} {props.age} {props.Email}
      </h1>
    </div>
  );
}

export default Card;
