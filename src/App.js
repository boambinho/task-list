//import header from components
import Header from "./components/Header";
import ListaTarea from "./components/ListaTarea";
import Lista from "./components/Tarea";
import ListaHook from "./components/ListaHooks";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header title="Lista de tareas" color="Blue" />
//       </header>
//       <body>
//         {/* <ListaTarea lista={Lista} />
//         <Lista tareas={tareas} /> */}
//         <ListaHook />
//       </body>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      {/* pass two arguments in a component */}
      <Header title="My App" color="red" />
      <body>
        <ListaHook />
      </body>
    </div>
  );
}

export default App;
