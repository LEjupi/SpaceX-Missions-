import { useState, useEffect } from "react";
import './App.css';
import { Missions } from "./compoents/Missions";

const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    mission_name
    ships {
      name
      image
    }
  }
}
`
function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LAUNCHES_QUERY })
    })
      .then(Response => Response.json())
      .then(data => setLaunches(data.data.launchesPast))
  }, []);



  return (
    <div>
      <h1 className="header">SpaceX Missions</h1>
      <Missions launches={launches} />
    </div>
  );
}


export default App;


