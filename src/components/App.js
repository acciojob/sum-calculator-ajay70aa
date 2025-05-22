
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [numbers, setNumbers] = useState([])
  const [sum, setSum] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sum = numbers.reduce((x, y) =>  x + y, 0);
      setSum(sum);
    }, 0)
    return () => clearTimeout(timeout)
  }, [numbers])

  function handleChange(e){
    setNumbers([...numbers, parseInt(e.target.value)])
  }
  return (
    <div id="main">
        {/* Do not remove the main div */}
        <h1 className="heading">Sum Calculator</h1>
        <input type="number" onChange={(e) => handleChange(e)}/>
        <p className="result">Sum: {sum}</p>
    </div>
  )
}

export default App
