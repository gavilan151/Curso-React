import PropTypes from 'prop-types'
import "./Botones.css"
//import Stack from '@mui/material/Stack';

Boton.propTypes = {
  texto: PropTypes.string,
  handler: PropTypes.function,
};

export function Boton( {texto,handler} ) {
 
    function handleMouseOver(){
    console.log("Mouse over");
     <h2>Boton presionado</h2>
    }

   return (
     <>

      <button onMouseOver={handleMouseOver} onClick={handler} className='botones'>
         {texto}
      </button>
     </>
   )
}

