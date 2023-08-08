import PropTypes from "prop-types";

PersonaFuncion.propTypes = {
  listado: PropTypes.array,
  titulo: PropTypes.string,
};

export default function PersonaFuncion({ listado, titulo = "Titulo vacio" }) {
  const nombre = "Gabriel Damian";
  const apellido = "Miguel";
  const obj = {
    nombre: "Gabriel Damian",
    apellido: "Miguel",
  };

  return (
    <>
      <h3 className="titulo">{titulo}</h3>
      {listado.map((elemento) => {
        return (
          <div key={elemento.id} className="logo">
            {elemento.nombre +
              " " +
              elemento.apellido +
              " de " +
              elemento.edad +
              " años"}
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
