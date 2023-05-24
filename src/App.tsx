import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";
import DemoNoContext from "./components/DemoNoContext";
import TodoAppWithReducer from "./components/TodoAppWithReducer";
import TodoRedux from "./components/TodoRedux";
import TodoReduxThunk from "./components/TodoReduxThunk";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TodoReduxThunk />
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
