import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table";
import Inputs from "./components/Inputs";
import { addTaskByUpdate } from "./hooks/res";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  return (
    <React.Fragment>
      <Inputs
        eventSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.target);

          formData.append("id", id);

          setId(id + 1);

          const formDataObj = Object.fromEntries(formData.entries());

          setTasks(addTaskByUpdate(tasks, formDataObj));

          event.target.reset();
        }}
      />
      <Table tasks={tasks} setTasks={setTasks} />
    </React.Fragment>
  );
}
