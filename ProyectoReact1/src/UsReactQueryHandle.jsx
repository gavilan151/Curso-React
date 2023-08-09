import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


// const getUsuarios = async ()=> {
//   const response = await fetch("https://reqres.in/api/users?page=" + page)
      
//         return response;
    
// }


export default function Usuarios2() {
  const [page, setPage] = useState(1); // le decimos que empiece por la pagina 1
  const [totalPages, setTotalPages] = useState(1);



  // const query = useQuery({
  //   queryKey: ["usuarios", page],     // queryKey identifica a esta query de forma unica en toda la aplicacion. Le agregamos page ya que tenemos mas de 1 pagina cada pagina tiene que ser parte de la Key ya que serian distintos queris (cada oagina tiene su query)
  //   queryFn: getUsuarios
     
  // });
  
  

  function handleClickSiguiente() {
    setPage((page) => page + 1);
  }

  function handleClickAnterior() {
    setPage((page) => page - 1);
  }

  function handleClickListado() {
    
  }

  return (
    <>
    
    <button disabled={page === 1} onClick={handleClickAnterior}>
        Anterior
      </button>
      <button disabled={page === totalPages} onClick={handleClickSiguiente}>
        Siguiente
      </button>

      <button onClick={()=>query.refetch} className="botones">
        Listado
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
