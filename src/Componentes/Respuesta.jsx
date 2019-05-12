import React, { Component } from 'react';
import axios from 'axios';

import Modal from './Modal';

class Respuesta extends Component {
    constructor() {
      super();
      this.state = {
        modalVisible: false,
        resultadoBusqueda: {}
      };
      this.apiUrl = 'http://www.omdbapi.com/?';
  
      this.fnModalVisible = this.fnModalVisible.bind(this);
    }
  
    async fnModalVisible(idSearch) {
      let queryTotal = this.apiUrl+"i="+idSearch+"&apikey=21f8f6b3";
      console.log(queryTotal);
      let response = await axios.get(`${queryTotal}`);
      this.setState({
        resultadoBusqueda: response.data
      });
    }
  
    render(){
      if (this.props.resultadoQuery.Search) {
        return(
          <div className="container">
            <div className="row">
            {this.props.resultadoQuery.Search.map((item, index) => {
              return (<div key={index} className="col-12 col-lg-4">
                <p>{item.Title}</p>
                <img src={item.Poster} width="350" height="500" alt=""/>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {this.fnModalVisible(item.imdbID)}}>
                  Ver Películas
                </button>
              </div>
              
              );
            })}
            </div>
            <Modal resultadoBusqueda={this.state.resultadoBusqueda}/>
          </div>
        );
      }
      else {
        return(
          null
        );
      }
    }
  }

export default Respuesta;