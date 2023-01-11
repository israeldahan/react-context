import logo from "./logo.svg";
import "./App.css";
import Text from "./componnents/Text";
import React from "react";
import { ButtonContext } from "./ButtonContext";

function App() {
  let data = [
    {
      text: "Edit <code>src/App.js</code> and save to reload.",
      textToButton: "Hello world",
    },
    {
      text: "AGAIN Edit <code>src/App.js</code> and save to reload.",
      textToButton: "Hello world1",
    },
  ];
  let func = (text) => {
    console.log(text);
  };
  // let func_2 = () => {
  //   console.log("Hello World 2222");
  // };
  let user = {user:{
    name: "Israel David Dahan",
    title: "Devops engineer",
  }};

  return (
    <div className="App">
      <ButtonContext.Provider value={user}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {data.map((res, key) => {
            return (
              <Text
                text={res.text}
                func_props={func}
                textToButton={res.textToButton}
                key={key}
              />
            );
          })}

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ButtonContext.Provider>
    </div>
  );
}

export default App;
