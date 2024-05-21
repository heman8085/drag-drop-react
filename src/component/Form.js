import React, { useContext } from "react";
import { DragdropContext } from "./store/DragdropContext";
const Form = () => {

  const { boxA, boxB, onDragStart, onDrop } =
    useContext(DragdropContext);

    const onDragOver = (e) => {
      e.preventDefault();
    };
    
  return (
    <div>
      <div className="container">
        <div
          className="box"
          onDrop={(e) => onDrop(e, "droppableA")}
          onDragOver={onDragOver}
        >
          <h2>Box A</h2>
          {boxA.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => onDragStart(e, item, "droppableA")}
              className="item"
            >
              {item.content}
            </div>
          ))}
        </div>

        <div
          className="box"
          onDrop={(e) => onDrop(e, "droppableB")}
          onDragOver={onDragOver}
        >
          <h2>Box B</h2>
          {boxB.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => onDragStart(e, item, "droppableB")}
              className="item"
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
