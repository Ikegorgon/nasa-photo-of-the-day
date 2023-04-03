import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto.js";
import Header from "./Components/Header.js";

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState(getDate());
  const today = getDate();

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=tKx4bDgmGdi8EEzjcIHyMzjOImyjLhHiArJA8JmL&date=' + today)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  useEffect(() => {
    console.log(date);
    axios.get('https://api.nasa.gov/planetary/apod?api_key=tKx4bDgmGdi8EEzjcIHyMzjOImyjLhHiArJA8JmL&date=' + date)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [date]);

  return (
    <div className="App">
      {date && <Header date={date} today={today} setDate={setDate}/>}
      {data && <NasaPhoto photo={data} />}
    </div>
  );
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

export default App;
