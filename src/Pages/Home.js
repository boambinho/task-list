import React from "react";

const Home = () => {
  return (
    <div>
      <br />
      <h1> My Task List </h1>
      <br />
      <p className="subtitulo">¡ Bienvenido a tu lista de tareas !</p>
      <br />
      <p className="subtitulo">
        {" "}
        Para Comenzar a crear o modificar tu tarea, presiona{" "}
        <strong>Tu lista de tareas </strong>
        arriba
      </p>
      <br />
      <p className="subtitulo">
        Para profundizar sobre la aplicación, presiona
        <strong> About us </strong> arriba a la derecha
      </p>
      <br />
    </div>
  );
};

export default Home;
