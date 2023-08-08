import PropTypes from "prop-types";
import "./Botones.css";
import { useState } from "react";

Counter.propTypes = {
  texto: PropTypes.string,
};

export function Counter({ texto }) {

  const [contador, setContador] = useState(0); //esto es para que actualice el <div>{contador}</div> en el return cada vez que se presiona el boton y ejecuta la funcion handleClick()
                                             //para eso debe usarse la funcion useState(), que en este caso inicializa contador en 0 y luego se usa setContador() para incrementarlo y renderiza la parte del codigo que muestra el contador

  function handleMouseOver() {
    console.log("Mouse over");
    <h2>Boton presionado</h2>;
  }

  function handleClick() {
    setContador((contador) => (contador += 1));
    console.log(contador);
  }

  return (
    <>
      <div>{contador}</div>
      <button
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        className="botones"
      >
        {texto}
      </button>
    </>
  );
}
