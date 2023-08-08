import "./Botones.css";
import { useState } from "react";

export default function Usuarios() {
  const [users, setUsers] = useState([]);

  function handleClickListado(){
   fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then((json) => setUsers(json.data));
  }

  function handleClickBorrarTodo(){
   setUsers([]);
  }

  return (
    <>
      <button onClick={handleClickListado} className="botones">Listado</button>
      <button onClick={handleClickBorrarTodo} className="botones">Borrar</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>email</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
         {users.map( (cadaUsuario) => (
            <tr key = {cadaUsuario.id}>
               <td> {cadaUsuario.id} </td>
               <td> {cadaUsuario.first_name} </td>
               <td> {cadaUsuario.last_name} </td>
               <td> {cadaUsuario.email} </td>
               <td> 
                  <img src = {cadaUsuario.avatar} /> 
               </td>
            </tr>
         ) )}
        </tbody>
      </table>
    </>
  );
}
