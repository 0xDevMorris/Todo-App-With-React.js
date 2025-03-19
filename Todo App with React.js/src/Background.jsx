import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

 
  const addTask = () => {
    if (task.trim() !== "") {
      setNewTask([...newTask, task]);
      setTask(""); 
    }
  };

  return (
    <div className="container">
      <div className="input-bar">
        <input
          type="text"
          placeholder="Enter"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <h3>TODAY’S TASKS</h3>
      <ul>
        {newTask.map((item, index) => (
          <li key={index}>
            <span className="circle"></span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;