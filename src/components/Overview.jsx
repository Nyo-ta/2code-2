import { useState, useEffect } from "react";

function Overview() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then(res => res.json())
      .then(setGoals);
  }, []);

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${goals.reduce((sum, g) => sum + Number(g.savedAmount), 0)}</p>
      <p>Completed Goals: {goals.filter(g => Number(g.savedAmount) >= Number(g.targetAmount)).length}</p>
    </div>
  );
}

export default Overview;
