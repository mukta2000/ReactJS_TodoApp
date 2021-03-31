import React, { useState } from "react";
import TodoItems from "./TodoItems";

function App() {
  const [list, additem] = useState([]);
  const [item, update_item] = useState("");

  function enter_item(event) {
    update_item(event.target.value);
  }

  function add() {
    additem((prevValue) => {
      return [...prevValue, item];
    });

    update_item("");
  }

  function delete_item(id) {
    additem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={enter_item} value={item} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li onClick={delete_item}>Add your Items !!</li>
          {list.map((todoitems, index) => (
            <TodoItems
              item={todoitems}
              key={index}
              id={index}
              onCheck={delete_item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
