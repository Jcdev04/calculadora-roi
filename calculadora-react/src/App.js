import React,{Component} from 'react'
import './App.css';
import ShowMore from './Components/show-more';
import ProcesosComun from './Components/procesos-comun';
import VentanaInicio from './Components/ventana-inicio';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        nombre: "",
        nombreEmpresa: ""
      }
    }  

    render(){
      const {nombre, nombreEmpresa} = this.state
      return (
        <div className="App">
          {/* <VentanaInicio /> */}
          <ShowMore/>
          <ProcesosComun/>
        </div>  
    )
  }
}

export default App;
