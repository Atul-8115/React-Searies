import { useState } from "react";


function App() {

  let [counter, setCounter] = useState(5)


  const addValue = () => {
    if(counter >= 27) {
      return
    }
    console.log("clicked", counter);
    counter = counter+1;
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter <= 0) {
      return;
    }
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick = {addValue}>
      Add value</button>
      <button
      onClick={removeValue}>
      Decrease value</button>
    </>
  )
}

export default App
