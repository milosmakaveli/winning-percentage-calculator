import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [wins, setWins] = useState("");
  const [losses, setLosses] = useState("");
  const [combine, setCombine] = useState("");
  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    setCombine(parseInt(wins) + parseInt(losses));
    setPercentage(((parseInt(wins) / parseInt(combine)) * 100).toFixed(2));
  }, [wins, losses, combine, percentage]);

  return (
    <>
      <div className="container">       
          <label htmlFor="wins">Wins</label>
          <input
            type="number"
            min={0}
            id="wins"
            value={wins}
            onChange={(e) => setWins(e.target.value)}
          />
          <br />
          <label htmlFor="losses">Losses</label>
          <input
            type="number"
            min={0}
            id="losses"
            value={losses}
            onChange={(e) => setLosses(e.target.value)}
          />
          <br />       
          <label htmlFor="combine">Number of games</label>
          <input
            type="number"
            id="combine"
            value={isNaN(combine) ? "" : combine}
            readOnly
          />
          <br />           
          <label htmlFor="percentage">Winning percentage</label>
          <input
            id="percentage"
            value={isNaN(percentage) ? "" : percentage + "%"}
            readOnly
          />
        
      </div>
    </>
  );
}

export default App;
