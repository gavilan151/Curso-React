import "./App.css";
// import Persona from "./PersonaComponent";
// import PersonaFuncion from "./PersonaFuncion";
// import { Boton } from "./Boton";
// import { Counter } from "./Counter";
// import Usuarios from "./Usuarios";
// import UsuariosConReactQuery from "./UsuariosConReactQuery";
import UsReactQueryHandle from "./UsuariosConReactQuery";
function App() {
  // const listadopersonas = [
  //   { id: 1, nombre: "Gabriel", apellido: "Miguel", edad: "56" },
  //   { id: 2, nombre: "Claudia", apellido: "Flosi", edad: "55" },
  //   { id: 3, nombre: "Pepe", apellido: "Potamo", edad: "105"}
  // ]

  // function handleClick(){
  //   console.log("Boton presionado desde el padre");
  //    <h2>Boton presionado desde el padre</h2>

  // }

  return (
    <>
      {/* <UsuariosConReactQuery /> */}
      <UsReactQueryHandle/>

      {/* <Usuarios/>
    <Counter texto = "Contar"/>
     <Persona/>
     <PersonaFuncion listado = {listadopersonas} titulo= "LISTADO DE PERSONAL"/>
     <Boton texto = "Boton de Alta" handler={handleClick}/> */}
    </>
  );
}

export default App;
