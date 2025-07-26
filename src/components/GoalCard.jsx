import { Link } from "react-router-dom";

function GoalCard({ goal, onDelete }) {
  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: {goal.targetAmount}</p>
      <p>Saved: {goal.savedAmount}</p>
      <p>Deadline: {goal.deadline}</p>

      <div className="buttons">
        <Link to={`/edit/${goal.id}`}>Edit</Link>
        <button onClick={() => onDelete(goal.id)}>Delete</button>
        <Link to="/deposit">Deposit</Link>
      </div>
    </div>
  );
}

export default GoalCard;


