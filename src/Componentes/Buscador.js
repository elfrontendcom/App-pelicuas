import React from 'react';

const Buscador = (props) => {
    return (
      <div>
      <input type="text" onChange={props.handleChange}/>
      <button onClick={props.realizarBusqueda}>Buscar</button>
      </div>
    );
  }

export default Buscador;