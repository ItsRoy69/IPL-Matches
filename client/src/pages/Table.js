import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import "../styles/Table.css";
import axios from "axios";
import wonImg from '../images/win.svg';
import lostImg from '../images/lost.svg';

const Table = () => {
  const [data, setData] = useState([]);
  let wins = {};
  let matchesPlayed = {};
  let matchesArray = [];

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

  data?.forEach(({ winner }) => {
    if (wins[winner]) {
      wins[winner] = wins[winner] + 1;
    } else {
      wins[winner] = 1;
    }
  });  

  data?.map(({ team1, team2, winner }) => {
    winner && matchesArray.push(team1, team2);
  });

  matchesArray.forEach((item) => {
    if (matchesPlayed[item]) {
      matchesPlayed[item] = matchesPlayed[item] + 1;
    } else {
      matchesPlayed[item] = 1;
    }
  });

  let last5matches = [];

  data.forEach(({ team1, team2, winner }) => {
    if (winner) {
      let obj = {};
      if (team1 === winner) {
        obj[team1] = "won";
        obj[team2] = "lost";
        last5matches.push(obj);
      } else {
        obj[team1] = "lost";
        obj[team2] = "won";
        last5matches.push(obj);
      }
    }
  });

  last5matches = last5matches.reverse();
  let result = {};
  last5matches.forEach((matchResult) => {
    const teams = Object.keys(matchResult);
    teams.forEach((team) => {
      if (!result.hasOwnProperty(team)) result[team] = [];
      if (result[team]?.length === 5) return;
      result[team] = [...result[team], matchResult[team]];
    });
  });

  let sortedWins = [];
  for (var team in wins) {
    team !== "null" && sortedWins.push([team, wins[team]]);
  }

  sortedWins?.sort((a, b) => b[1] - a[1]);


  return (
    <div className="table">
      <Navbar />
   
      <div className="tally">
        <div className="table-header">
          <h4>Team</h4>
          <div className="table-points">
            <h4>M</h4>
            <h4>W</h4>
            <h4>L</h4>
            <h4>Pts</h4>
            <h4>Last 5</h4>
          </div>
        </div>
        {sortedWins.map((item, index) => {
          return (
            <div className="match-details">
              <div className="team-details">
                <h4>{index + 1}</h4>
                <h4 className="team-items">{item[0]}</h4>
              </div>
              <div className="team-stats">
                <h4 className="team-match">{matchesPlayed[item[0]]}</h4>
                <h4 className="team-win">{item[1]}</h4>
                <h4 className="team-lost">{matchesPlayed[item[0]] - item[1]}</h4>
                <h4 className="team-point">{item[1] * 2}</h4>
                <h4 className="circles">
                  {result[item[0]]?.map((item) => {
                    if (item === "won") {
                      return <img src={wonImg} alt="won"></img>;
                    }
                    return <img src={lostImg} alt="lost"></img>;
                  })}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Table
