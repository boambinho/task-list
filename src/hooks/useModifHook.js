import tareas from "../hooks/ListaHooks";
import { useState, useEffect } from "react";
import ListaHook from "./ListaHooks";

// cutom hook for modify
const useModif = () => {
  const { tareas, handleAddUser, setTareas, handleDeleteUser } = ListaHook();

  const handleUpdateUser = (
    idMessage,
    nombreMessage,
    fechaMessage,
    hechoMessage
  ) => {
    const newTareas = tareas.map((tarea) => {
      if (tarea.id === idMessage) {
        return {
          ...tarea,
          nombre: nombreMessage,
          fecha: fechaMessage,
          hecho: hechoMessage,
        };
      }
      return tarea;
    });
    setTareas(newTareas);
  };
  return {
    tareas,
    handleAddUser,
    setTareas,
    handleDeleteUser,
    handleUpdateUser,
  };
};

export default useModif;
