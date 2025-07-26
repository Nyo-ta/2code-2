import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';


import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>SMART GOAL PLANNER</h1>
        <div className="nav">
         <nav>
          <Link to="/">Goals</Link>
          <Link to="/add">Add Goal</Link>
          <Link to="/deposit">Deposit</Link>
          <Link to="/overview">Overview</Link>
         </nav>
        </div>
        <Routes>
          <Route path="/" element={<GoalList />} />
          <Route path="/add" element={<GoalForm />} />
          <Route path="/edit/:id" element={<GoalForm />} />
          <Route path="/deposit" element={<DepositForm />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

