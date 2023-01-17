import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Team from "./Components/Team";
import { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState({ name: "", email: "", role: "" });
  const handleSubmit = (event) => {
    event.prevenDefault();
    setTeam([...team, newMember]);
    setNewMember({ name: "", email: "", role: "" });
  };
  const handleChange = (event) => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };
  return (
    <div className="App">
      <Form
        newMember={newMember}
        handleSubmit={handleSubmit}
        handleChange={handleChange}></Form>
      <Team team={team}></Team>
    </div>
  );
}

export default App;
