import React, { useState } from "react";
import tareas from "../App.js";

function OrdenLista() {
  const [tareas, setLista] = useState(tareas);
}

const ListaTarea = ({ lista }) => (
  <ol>
    <li>
      <strong>21 Noviembre</strong> Prueba React
    </li>
    <li>
      <strong>24 Noviembre</strong> Prueba JS
    </li>
    <li>
      <strong>29 Noviembre</strong> Deportes
    </li>
    <li>
      <strong>1 Diciembre</strong> Matrimonio
    </li>
    <li>
      <strong>9 Diciembre</strong> Cumpleaños Madre
    </li>
  </ol>
);

export default ListaTarea;
