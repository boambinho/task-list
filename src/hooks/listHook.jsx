import { useState } from "react";

const useTareaList = () => {
  const [tareas, setTareas] = useState([]);

  const handleAddTarea = (nameMessage, fechaMessage, hechoMessage) => {
    const newTarea = {
      // increment id
      id: tareas.length + 1,
      nombre: nameMessage,
      hecho: hechoMessage,
      fecha: fechaMessage,
      eliminar: "hola",
    };
    setTareas([...tareas, newTarea]);
  };
  const handleRemoveTarea = (id) => {
    const newTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(newTareas);
  };
  const handleUpdateTarea = (
    nameMessage,
    fechaMessage,
    hechoMessage,
    idMessage
  ) => {
    const newTarea = tareas.map((tarea) => {
      console.log(idMessage);
      // check if the id is the same

      if (parseInt(tarea.id) === parseInt(idMessage)) {
        return {
          nombre: nameMessage,
          fecha: fechaMessage,
          hecho: hechoMessage,
          id: idMessage,
        };
      }
      return tarea;
    });
    setTareas(newTarea);
  };
  return {
    tareas,
    handleAddTarea,
    handleRemoveTarea,
    handleUpdateTarea,
    setTareas,
  };
};

export default useTareaList;
