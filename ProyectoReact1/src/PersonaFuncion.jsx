export default function PersonaFuncion() {
  const nombre = "Gabriel Damian";
  const apellido = "Miguel";
  const obj = {
    nombre: "Gabriel Damian",
    apellido: "Miguel",
  };

  const listadoPersonas = [
    { id: 1, nombre: "Gabriel", apellido: "Miguel", edad: "56" },
    { id: 2, nombre: "Claudia", apellido: "Flosi", edad: "55" },
    { id: 3, nombre: "Pepe", apellido: "Potamo", edad: "105"},
  ];
  return (
    <>
      {listadoPersonas.map((elemento) => {
         return (
        <div key={elemento.id} className="logo">
          {elemento.nombre + " " + elemento.apellido + " de " + elemento.edad +" años"}
        </div>
      );
      })}

      <div className="logo2">
        Hola {nombre} {apellido}
      </div>
      <div>
        {obj.nombre} {obj.apellido}
      </div>
    </>
  );
}
