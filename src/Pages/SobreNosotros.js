import React from "react";

export const SobreNosotros = () => {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <br />
      <p className="aboutUs">
        {" "}
        <strong>My Task List </strong> es una lista de tareas creada para que
        los usuarios puedan realizar una organización de sus tareas. No importa
        si es una lista de un día, de una semana o de un mes. Los usuarios
        pueden usarla como ellos gusten.
      </p>
      <p className="aboutUs">
        {" "}
        Como funcionalidades, tenemos la posibilidad de crear una tarea,
        añadiendo una fecha, un estado y una descripción, con el fin de que
        puedan ser modificadas según el gusto del usuario.
      </p>
      <p className="aboutUs">
        {" "}
        Para su desarrollo, fueron utilizados lenguajes de etiqueta y cascada
        como HTML y CSS, mientras que el lenguaje de programación usado, fue
        JavaScript. Al mismo tiempo fue utilizado el framework de JavaScript,
        React, para la creación de la página web y la generación de la interfaz
        de usuario.
      </p>
    </div>
  );
};
