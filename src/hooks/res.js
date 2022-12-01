// tecnica de procesamiento de informacion sin logica
// una tecnica de modulacion de funcionalidad

export const addTaskByUpdate = (arrayWithObjs, newObj) => {
    return [...arrayWithObjs, newObj]
}

export const deleteTaskByID = (arrayWithObjs, id) => {
    return arrayWithObjs.filter((objTask) => objTask.id !== id);
}