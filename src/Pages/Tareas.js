import React, { useState } from "react";
import Inputs from "../components/Inputs";
import { addTaskByUpdate } from "../hooks/res";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Table from "../components/Table";

export default function Tareas() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  const [storedValue, setStoredValue] = useLocalStorage();

  console.log(storedValue);

  return (
    <div>
      <h1>Tareas</h1>;
      <Inputs
        eventSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.target);

          formData.append("id", id);

          setId(id + 1);

          const formDataObj = Object.fromEntries(formData.entries());

          setTasks(addTaskByUpdate(tasks, formDataObj));

          setStoredValue(formDataObj);

          event.target.reset();
        }}
      />
      <Table tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
