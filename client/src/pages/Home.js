import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import "../styles/Home.css";
import axios from "axios";

const Home = () => {

  const [data, setData] = useState([]);
  const [ search ] = useState();

  let final = [];
    search?.split(" ").forEach((item) => {
        const res = data.filter(
        (el) =>
            (el.team1.toLowerCase().includes(item.toLowerCase()) ||
            el.team2.toLowerCase().includes(item.toLowerCase())) &&
            !final.includes(el)
        );
        final.push(...res);
    });

    let toBeRendered = search && search.length > 0 ? final : data;
  

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json"
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="home" id='match'>
      <Navbar />
      <div className="matches">
        {toBeRendered?.map(({ id, date, team1, team2, winner }, index) => {
          return (
            <div key={id} className="tile">
              <div className="details">
                <span>
                  T20 {index + 1} of {data.length}
                </span>
                <span>{team1}</span>
                <span>{team2}</span>
              </div>
              <div className="date">
                <span>{date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Home
