import "./Botones.css";
import { useEffect, useState } from "react";

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  // "https://reqres.in/api/users" tiene 2 paginas con datos de usuarios: page1 y page2
  const [page, setPage] = useState(1); // le decimos que empiece por la pagina 1

  useEffect(() => {
    console.log("se llamo al callback del useEffect");
    //useEffect permite cargar el listado de usuarios cuando se carga la pagina y renderiza el ouput
    fetch("https://reqres.in/api/users?page=" + page)
    .then((response) => response.json())
    .then((json) => {
      setTotalPages(json.total_pages);
      setUsers(json.data);
    });
  }, [page]); // si pongo [] (vacio, sin parametros)indica que el useEffect se ejecute solo 1 vez, de lo contrario, como renderiza el ouput y al pasar esto vuelve a ejeccutarse el useEffect, entraria en un bucle
  // si pongo [page] se ejecuta cada vez que el valor de page se modifica

  function handleClickListado() {
    fetch("https://reqres.in/api/users") //carga el listado de usuarios
      .then((response) => response.json())
      .then((json) => setUsers(json.data));
  }

  function handleClickAnterior() {
    console.log("se llamo al ANTERIOR");
    setPage((page) => page - 1);
  }
  function handleClickSiguiente() {
    setPage((page) => page + 1);
  }

  function handleClickBorrarTodo() {
    console.log("se llamo al callback del useEffect");
    setPage([]);
  }
  return (
    <>
      <button disabled={page === 1} onClick={handleClickAnterior} >
        Anterior
      </button>
      <button disabled={page === totalPages} onClick={handleClickSiguiente} className="botones">
        Siguiente
      </button>
      <button onClick={handleClickListado} className="botones">
        Listado
      </button>
      <button onClick={handleClickBorrarTodo} className="botones">
        Borrar
      </button>
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
          {users.map((cadaUsuario) => (
            <tr key={cadaUsuario.id}>
              <td> {cadaUsuario.id} </td>
              <td> {cadaUsuario.first_name} </td>
              <td> {cadaUsuario.last_name} </td>
              <td> {cadaUsuario.email} </td>
              <td>
                <img src={cadaUsuario.avatar} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
