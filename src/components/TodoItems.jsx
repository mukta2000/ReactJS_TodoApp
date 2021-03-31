import React from "react";

function TodoItems(props) {
  return (
    <div
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default TodoItems;
