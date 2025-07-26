import { useState, useEffect } from "react";

function DepositForm() {
  const [goals, setGoals] = useState([]);
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then(res => res.json())
      .then(setGoals);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;

    const updated = Number(goal.savedAmount) + Number(amount);

    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updated })
    }).then(() => {
      setAmount("");
      setGoalId("");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={goalId} onChange={e => setGoalId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit" disabled={!goalId || !amount}>Deposit</button>
    </form>
  );
}

export default DepositForm;

