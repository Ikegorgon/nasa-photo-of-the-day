import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
      {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;
