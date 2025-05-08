import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const Addition = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const Removing = () => {
    setCounter(
      prevCount => (prevCount > 0 ? prevCount - 1 : 0)
    )
  }
  return (
    <>
      <div className="flex justify-center items-cente min-h-52 bg-emerald-800 py-5 min-w-auto">
        <div className="text-center">
          <h1 className="text-center text-black text-2xl py-5 font-extrabold">Counter App</h1>
          <button className="bg-amber-700 rounded p-2 w-1/2" onClick={Addition}>Add +1</button>
          <button className="bg-amber-300 rounded p-2 w-1/2 m-5" onClick={Removing}>Sub -1</button>
          <h2 className="text-center text-white pt-5 font-bold">Counter : {counter}</h2>
        </div>
      </div>
    </>
  )
}

export default App;