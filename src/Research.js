import { useEffect, useState } from "react";
import "./Research.css"

const Research = () => {
  // needed to get that 2nd value which is the function to update our state
  const [getFact, setGetFact] = useState([]);

  let handleFetch = async () => {
    // wrapped in a try catch block so if any errors occur
    // they will be thrown to our catch block
    try {
      // using the fetch method to get a response
      // need to use the await keyword here
      let response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      // if the response status is NOT 200 then it will throw an error
      // the status of 200 means success
      if (response.status !== 200) {
        throw new Error("error");
      }
      // converting it to json so we can read it
      // need to use the await keyword here to wait for the response
      let data = await response.json();
      // using the function that was returned back to us from our useState hook, to give
      // getFact a new value
      setGetFact(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);
  // here we are ensuring that we have some data to map through
  // by doing this after we have collected our data in handlefetch, it is a state
  // update, trigger a re-render and render with the new state value
  // if this wasnt here it would dispaly and error say "map is not a function"
  if (!getFact) {
    return <p>loading...</p>;
  }

  return (
    <div className="app">
      <h1>THE SIMPSONS QUOTES</h1>
      {getFact.map((item, index) => {
        return <h2>{item.quote}</h2>;
      })}
       {getFact.map((item, index) => {
        return <h3>{item.character}</h3>;
      })}
      <button onClick={handleFetch}>G'O!</button>
    </div>
   
  );
};


export default Research;