import React,{Component} from "react";
import { connect} from "react-redux"

const CSS = {
    principalContainer:{
        maxWidth: 700,
        width: "100%",
        margin: "50px auto",
    },
    titulo:{
        fontSize: 25,
        color: "#FC4D19",
    }  
}    
class ProcesosComun extends Component{
    constructor(props){
        super(props)
        this.state ={
            todosProcesos: props.procesos.user.procesos
        }
    }


    render(){
        const {todosProcesos} = this.state
        return(
            <div style={CSS.principalContainer}>
                <h1 style={CSS.titulo}>Procesos en común:</h1>
                {
                    todosProcesos.filter((proceso)=>{
                        if(proceso.ProcesosComun){
                            return true;
                        }
                        return false;
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        procesos: state
    }
}

export default connect(mapStateToProps)(ProcesosComun);