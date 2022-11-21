import useTarea from "./useAdd";
import useDelete from "./useDelete";

//create custom hook
const useDelete = () => {
  const { tareas, handleAddUser, setTareas } = useTarea();

  const handleDeleteUser = (idMessage) => {
    const newTareas = tareas.filter((tarea) => tarea.id !== idMessage);
    setTareas(newTareas);
  };
  return { tareas, handleAddUser, setTareas, handleDeleteUser };
};

export default useDelete;
