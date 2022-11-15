//import header from components
import Header from "./components/Header";
import ListaTarea from "./components/ListaTarea";
import Lista from "./components/Tarea";

const tareas = [
  { id: 1, hecho: true, nombre: "Prueba React", fecha: "21 Noviembre" },
  { id: 2, hecho: true, nombre: "Prueba JS", fecha: "24 Noviembre" },
  { id: 3, hecho: false, nombre: "Deportes", fecha: "29 Noviembre" },
  { id: 4, hecho: true, nombre: "Matrimonio", fecha: "1 Diciembre" },
  { id: 5, hecho: false, nombre: "Cumpleaños Madre", fecha: "9 Diciembre" },
];
//create app component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Lista de tareas" color="Blue" />
      </header>
      <body>
        <ListaTarea lista={Lista} />
        <Lista tareas={tareas} />
      </body>
    </div>
  );
}

export default App;
