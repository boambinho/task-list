import React from "react";
import { deleteTaskByID } from "../hooks/res";

export default function Table({ tasks, setTasks }) {
  return (
    <React.Fragment>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Description</th>
          <th>State</th>
          <th>Options</th>
        </thead>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.date}</td>
            <td>{task.description}</td>
            <td>{task.state ? "Completed" : "Pending"}</td>
            <td>
              <div className="iconos">
                <input
                  type="checkbox"
                  checked={task.state}
                  onClick={() => {
                    setTasks(
                      tasks.map((objTask) => {
                        if (objTask.id === task.id) {
                          return {
                            ...objTask,
                            state: !task.state,
                          };
                        }

                        return objTask;
                      })
                    );
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  onClick={() => {
                    setTasks(deleteTaskByID(tasks, task.id));
                  }}
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
}
