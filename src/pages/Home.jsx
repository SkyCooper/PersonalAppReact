import React from "react";
import axios from "axios";

const Home = () => {
  const getData = async () => {
    const { data } = await axios("http://127.0.0.1:8000/api/");
    console.log(data);
  };
  return <div onClick={getData}>Home</div>;
};

export default Home;
