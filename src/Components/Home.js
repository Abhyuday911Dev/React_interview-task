import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';

const Home = () => {
  const [dataa, setData] = useState([]);
  const navigate = useNavigate();

  // using fetch
  // const getData = async () => {
  //   const data = await fetch("https://picsum.photos/v2/list");
  //   setData(await data.json());
  // };

  // using axios
  const getData = async () => {
    try {
      const { data } = await axios.get("https://picsum.photos/v2/list");
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(dataa);
  });

  return (
    <>
      <button onClick={() => navigate("/profile")}>letsgo to /profile</button>
      <Link to="/profile">profile page link</Link>
      {!dataa ? (
        <h1>Loading...</h1>
      ) : (
        dataa.map((e, idx) => (
          <Card key={idx} url={e.download_url} auth={e.author} />
        ))
      )}
    </>
  );
}

export default Home