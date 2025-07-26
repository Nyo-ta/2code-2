import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GoalForm({ onSave }) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: ""
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/goals/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setFormData({
            name: data.name || "",
            category: data.category || "",
            targetAmount: data.targetAmount || "",
            deadline: data.deadline || ""
          });
        });
    }
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const method = id ? "PATCH" : "POST";
    const url = id
      ? `http://localhost:3000/goals/${id}`
      : `http://localhost:3000/goals`;

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, savedAmount: formData.savedAmount || 0 })
    })
      .then((res) => res.json())
      .then((data) => {
        if (onSave) onSave(data);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Goal Name"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        placeholder="Target Amount"
        type="number"
      />
      <input
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        placeholder="Deadline"
        type="date"
      />
      <button type="submit">{id ? "Update" : "Add"} Goal</button>
    </form>
  );
}

export default GoalForm;

