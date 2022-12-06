import React,{Component} from 'react'
import './App.css';
import ShowMore from './Components/show-more';
import ProcesosComun from './Components/procesos-comun';

class App extends Component {
    render(){
      return (
        <div className="App">
          <ShowMore/>
        </div>  
    )
  }
}

export default App;
