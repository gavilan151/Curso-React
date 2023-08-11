import { useQuery } from "@tanstack/react-query";
import { useState } from "react";



function conDelay(delay) {           //es un deley para simular lo que tarda en traer los datos de un server y poder mostrar la leyenda: Recuperando datos... (sacarla)
  return new Promise((resolved) => setTimeout(resolved, delay));
}

export default function Usuarios2() {
  const [totalPages, setTotalPages] = useState(1);
  // "https://reqres.in/api/users" tiene 2 paginas con datos de usuarios: page1 y page2
  const [page, setPage] = useState(1); // le decimos que empiece por la pagina 1

  const query = useQuery({
   queryKey: ["usuarios", page],     // queryKey identifica a esta query de forma unica en toda la aplicacion. Le agregamos page ya que tenemos mas de 1 pagina cada pagina tiene que ser parte de la Key ya que serian distintos queris (cada oagina tiene su query)
   queryFn: () =>                   //queryFn ejecuta el flech
     conDelay(0).then(() =>         // conDelay(0) es un deley para simular lo que tarda en traer los datos de un server y poder mostrar la leyenda: Recuperando datos... (sacarla o poner en 0)
       fetch("https://reqres.in/api/users?page=" + page)
         .then((response) => response.json())
         .then((json) => {
           setTotalPages(json.total_pages);
           return json.data;
         })
     ),
   //staleTime: 10000,    //setea el tiempo que quiero que los datos permanescan en cache, entonces si yo pido que vuelva a mostrar los datos del fetch, si el tiempo que setee no expiro, esos datos los trae del cache y no del servidor
 });

  /* useEffect(() => {
    console.log("se llamo al callback del useEffect");
    fetch("https://reqres.in/api/users?page=" + page)
      .then((response) => response.json())
      .then((json) => {
        setTotalPages(json.total_pages);
        setUsers(json.data);
      });
  }, [page]);
*/
  

  function handleClickSiguiente() {
    setPage((page) => page + 1);
  }

  function handleClickAnterior() {
    setPage((page) => page - 1);
  }

 

  return (
    <>
    
    
    <button disabled={page === 1} onClick={handleClickAnterior}>
        Anterior
      </button>
      <button disabled={page === totalPages} onClick={handleClickSiguiente}>
        Siguiente
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
          {query.isLoading && (
            <tr>
              <td>Recuperando datos...</td>
            </tr>
          )}
          {query.data?.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.first_name}</td>
              <td>{u.last_name}</td>
              <td>{u.email}</td>
              <td>
                <img src={u.avatar} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
