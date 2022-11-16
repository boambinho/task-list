import React, { useState } from "react";

// Lista estática
const tareas = [
  { id: 1, hecho: true, nombre: "Prueba React", fecha: "21 Noviembre" },
  { id: 2, hecho: true, nombre: "Prueba JS", fecha: "24 Noviembre" },
  { id: 3, hecho: false, nombre: "Deportes", fecha: "29 Noviembre" },
  { id: 4, hecho: true, nombre: "Matrimonio", fecha: "1 Diciembre" },
  { id: 5, hecho: false, nombre: "Cumpleaños Madre", fecha: "9 Diciembre" },
];

function ListaHook() {
  const [list, setList] = useState(tareas);

  return (
    // permitir agregar mas de un elemento
    <React.Fragment>
      <ul>
        {list.map(({ id, nombre, fecha }) => (
          <li>
            {id} / {nombre} / {fecha}
          </li>
        ))}
      </ul>
      <table>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Cambiar Estado</th>
        </tr>
        {list.map(({ id, nombre, fecha, hecho }) => (
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
                  setList(
                    list.map((obj) => {
                      if (obj.id == id) {
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
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
}

export default ListaHook;
