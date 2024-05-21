import React, {} from "react";
import "./App.css";
import { DragdropProvider } from "./component/store/DragdropContext";
import Form from "./component/Form";

const App = () => {

  return (
    <DragdropProvider>
    <div className="App">
      <Form/>
    </div>
    </DragdropProvider>
  );
};

export default App;
