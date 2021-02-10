// Import React
import React, { useState, useEffect } from "react";

// Import Components
import Header from "./Header";
import Display from "./Display";

// Import API
import unsplash from "../api/unsplash";

// Import Style
import "./App.scss";

// App Component
const App = () => {
  // State Setup
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);

  // Search Function
  const imageSearch = () => {
    unsplash
      .get("/search/photos", {
        params: {
          query: input,
          per_page: 20,
          content_filter: "high",
        },
      })
      .then((res) => {
        setResult(res);
      });
  };

  // Calls Search Function On Input Change
  useEffect(() => {
    if (input !== null) {
      imageSearch();
    }
  }, [input]);

  return (
    <div className="app">
      <Header handleChange={(term) => setInput(term)} />
      <Display input={input} result={result} />
    </div>
  );
};

export default App;
