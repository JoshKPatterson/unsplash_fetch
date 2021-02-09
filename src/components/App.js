import React, { useState, useEffect } from "react";
import Header from "./Header";
import Display from "./Display";
import unsplash from "../api/unsplash";

const App = () => {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);

  const imageSearch = () => {
    unsplash
      .get("/search/photos", {
        params: {
          query: input,
        },
      })
      .then((res) => {
        setResult(res);
      });
  };

  useEffect(() => {
    if (input !== null) {
      imageSearch();
    }
  }, [input]);

  return (
    <div>
      <Header handleChange={(term) => setInput(term)} />
      <Display input={input} result={result} />
      <button onClick={() => console.log(result.data.results)}>adf</button>
    </div>
  );
};

export default App;
