import { useState } from 'react'
import './App.css'


function App() {
  let [count, setCount] = useState(0);

  const Adding = () => {
    count = count + 1;
      setCount(count);
  }

  const Removing = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-amber-200 m-5 rounded-lg w-[500px] h-64 flex items-center justify-center text-center">
        <div className='bg-amber-200 m-5 rounded-lg w-[500px] text-center h-64'>
          <h1 className='text-black'>Moumita Maity</h1>
          <button className='bg-green-600 rounded-b-sm p-2 m-2' onClick={Adding}
          >Add Value</button>
          <button className='bg-red-600 rounded-b-sm p-2 m-2' onClick={Removing}
          >Remove Value</button>
          <footer>Counter : {count}</footer>
        </div>
      </div>
    </div>
  )
}

export default App