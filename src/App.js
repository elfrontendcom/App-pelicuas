import React, {Component} from 'react';
import axios from 'axios';

import Respuesta from './Componentes/Respuesta';
import Buscador from './Componentes/Buscador';

class App extends Component {
  constructor() {
    super();
    this.state = {
      busquedaActiva: false,
      busqueda: '',
      resultadoQuery: []
    };

    this.apiUrl = 'http://www.omdbapi.com/?';

    this.handleChange = this.handleChange.bind(this);
    this.realizarBusqueda = this.realizarBusqueda.bind(this);
  }

  handleChange(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  async realizarBusqueda() {
    let queryBusqueda = this.state.busqueda.split(" ").join("+").toLocaleLowerCase();
    let queryTotal = this.apiUrl+"s="+queryBusqueda+"&type=movie&apikey=21f8f6b3";
    let response = await axios.get(`${queryTotal}`);
    if (response !== undefined) {
      this.setState({
        resultadoQuery: response.data,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Buscador handleChange={this.handleChange} realizarBusqueda={this.realizarBusqueda}/>
        {
        <Respuesta resultadoQuery={this.state.resultadoQuery} busquedaActiva={this.state.busquedaActiva} busqueda={this.state.busqueda}/>
      }
      </div>
    );
  }
}







export default App;
