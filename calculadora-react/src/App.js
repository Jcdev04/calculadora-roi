import React, { Component } from "react";
import "./App.css";
import MainPage from "./Components/main-page";
/* import ShowMore from "./Components/step-4/calculadora/show-more";
import ProcesosComun from "./Components/step-4/calculadora/procesos-comun";
import VentanaInicio from "./Components/step-4/calculadora/ventana-emergente/ventana-inicio";
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      nombreEmpresa: "",
    };
  }

  render() {
    const { nombre, nombreEmpresa } = this.state;
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
