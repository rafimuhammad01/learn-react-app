import React, {useState} from "react";
import './App.css';
import Profile from "./Profile.js"

function App() {
  const [counter, setCounter] = useState(0);
  const [isReact, setReact] = useState(false)
  const [value, setValue] = useState("World")

  const increment = () => {
    setCounter(counter+1)
  }

  const changeVal = () => {
    if (isReact) {
      setValue("World")
    } else {
      setValue("React")
    }

    setReact(!isReact)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className="App"> 
      


      <Profile name="Rafi" npm ="1906398603" description="CS Student"/>
      <br/>
      <Profile name="Testing 2" npm="123" description="dummy" />  
      <br/>
      <br/>


      <h1>Hello {value}</h1>
      <button onClick={changeVal}>Change value</button>
      <br/>

      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      
    </div>
  );
}

export default App;
