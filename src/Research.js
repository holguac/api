// PM Individual task

import { useEffect, useState } from "react";

const Research = () => {
  const [getQuote] = useState([]);

let handleFetch = async() => {
    let response = await fetch ("https://cat-fact.herokuapp.com/facts") 
    console.log(response)
}


useEffect(() => {
    async function fetchQuote () {
        
    }
})
  return (
    <div>
      <h1>setAdvice</h1>
      {getQuote.map((quote)
      )}
      <button onClick={handleFetch}>FETCH</button>
    </div>
  )
};

export default Research;