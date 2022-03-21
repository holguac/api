// AM Lecture 

import { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("")
  const [error, setError] = useState(false)


  let handleFetch = async() => {
    try {
    let response = await fetch ("https://api.adviceslip.com/advice") 
    // if the error numner isn't 200, show the follwing string. It will ingnore the rest of the code 
    if(response.status !== 200){
      throw new Error("whoopsie")
    }
    console.log(response)
    let data = await response.json()
    console.log(data)
    setAdvice(data.slip)
  } catch (error) {
    console.log("error:", error)
    setError(true)
  }
}

// need to use [] to tell the webapp to run on load, if not used it will get caught in an infinate loop
useEffect(() => {
  handleFetch()
  console.log("use effect worked")
}, [])
  return (
    <div>
      <h1>setAdvice</h1>
      {error ? <p>error</p>
      :
      <h2>{advice.advice}</h2>
      }
      <button onClick={handleFetch}>FETCH</button>

    </div>
  )
};

export default App;