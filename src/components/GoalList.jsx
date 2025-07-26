import { useEffect, useState } from "react";
import GoalCard from "./GoalCard";

function GoalList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then(res => res.json())
      .then(setGoals);
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" })
      .then(() => {
        setGoals(goals => goals.filter(goal => goal.id !== id));
      });
  }

  return (
    <div>
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default GoalList;
