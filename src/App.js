import "./App.css";
import useTareaList from "./hooks/addDeleteUpdate";
import { useState } from "react";

function App() {
  const {
    tareas,
    handleAddTarea,
    handleRemoveTarea,
    setTareas,
    handleUpdateTarea,
  } = useTareaList();

  // get value from input

  const [nameMessage, setNameMessage] = useState("");
  const handleChangeName = (event) => {
    setNameMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const [fechaMessage, setFechaMessage] = useState("");
  const handleChangeFecha = (event) => {
    setFechaMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const [hechoMessage, setHechoMessage] = useState("");
  const handleChangeHecho = (event) => {
    setHechoMessage(event.target.checked);

    console.log("value is:", event.target.checked);
  };

  const [idMessage, setIdMessage] = useState("");
  const handleChangeId = (event) => {
    setIdMessage(event.target.value);

    console.log("value is:", event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <body>
          {/* show lista de tareas */}
          <table>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Cambiar Estado</th>
              <th>Eliminar</th>
            </tr>
            {tareas.map(({ id, nombre, fecha, hecho }) => (
              <tr>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{fecha}</td>
                <td>{hecho ? "Completado" : "Pendiente"}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={hecho}
                    onClick={() => {
                      setTareas(
                        tareas.map((obj) => {
                          if (obj.id === id) {
                            return {
                              ...obj,
                              hecho: !hecho,
                            };
                          }

                          return obj;
                        })
                      );
                    }}
                  />
                </td>
                <td key={id} onClick={() => handleRemoveTarea(id)}>
                  {/* add svg icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </td>
              </tr>
            ))}
          </table>
          {/* create a button and pass parameters to function */}
          <div className="form">
            <button
              onClick={() =>
                handleAddTarea(nameMessage, fechaMessage, hechoMessage)
              }
            >
              Agregar Tarea
            </button>
            <button
              onClick={() =>
                handleUpdateTarea(
                  nameMessage,
                  fechaMessage,
                  hechoMessage,
                  idMessage
                )
              }
            >
              Editar Tarea
            </button>

            {/* get value from input */}
            <input
              type="text"
              onChange={handleChangeName}
              placeholder="Escribir tarea..."
            />

            <input
              type="text"
              placeholder="Escribir fecha de tarea..."
              value={fechaMessage}
              onChange={handleChangeFecha}
            />
            <input
              type="text"
              placeholder="Escribe ID de tarea a editar..."
              value={idMessage}
              onChange={handleChangeId}
            />
            <div>
              <input
                type="checkbox"
                value={hechoMessage}
                onChange={handleChangeHecho}
              />
              <label for="realizado">Realizado</label>
            </div>
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
