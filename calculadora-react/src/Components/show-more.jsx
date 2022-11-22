import React, { useState, Component } from "react"
import VentanaPrincipal from "./ventana-principal"
import { connect} from "react-redux"
import { agregarProceso,eliminarProceso,modificarProceso1,modificarCheck, modificarInputs } from "../Reducers/inputs";
import '../Styles/show-more.css';

const CSS = {
    button: {
        border: "none",
        borderRadius: "15px",
        width: "80px",
        height: "26px",
        margin: "0 2.5px",
        fontSize: "15px",
        cursor: "pointer",
        transition: "all ease-in 100ms"
    }

}


function ShowMore(props) {
        const todosProcesos = props.procesos.user.procesos
        const [botonEditar,setBotonEditar] = useState(false);
        /* console.log(todosProcesos) */
        let objeto = {}
        let value = 0
        return(
            <div className="principal-container">
                {todosProcesos.map((data,i)=>{
                    let numeroProceso = `Proceso ${String(i+1).padStart(3, '0')}`
                    objeto = {...data}
                    value = i
                    return(
                        <div className="proceso" key={numeroProceso}>
                            {/* NOMBRE DEL PROCESO */}
                            <div className="CRUD-container">
                            <input className="nombreProceso" placeholder={numeroProceso} type="text" value={objeto.nombreProceso} onChange={(e)=>
                                props.modificarProceso1(e.target.value,i)}/>
                            <div>
                                {/* EDITAR */}
                                <button style={CSS.button} className="btnEditar" onClick={(e)=>{
                                        e.preventDefault()
                                        setBotonEditar(true)
                                    }
                                }
                                >Editar</button>
                                {/* ELIMINAR */}
                                <button style={CSS.button} className="btnEliminar" onClick={()=>props.eliminarProceso(i)}>Eliminar</button>
                                {/* DESPLEGAR */}
                                <button className="btnSeleccionar" onClick={
                                    (e)=>{
                                        e.preventDefault()
                                    }
                                }>Desplegar</button>

                            </div>
                            {/* <div>TABLAA</div> */}
                            </div>
                            <div className="seleccionar">
                                {/* SELECCIONAR */}
                                <input className="checkPComun" type="checkbox" checked={objeto.procesoComun} onChange={
                                    ()=>props.modificarCheck(i)
                                }/>
                            </div>
                            <VentanaPrincipal FTEvalue={objeto.FTE} onSubmit = {(payload)=>{
                                props.modificarInputs(value,payload)                                
                                }} trigger={botonEditar} setTrigger = {setBotonEditar}/>
                        </div>
                    )
                }
                )}
                <div className="agregar-proceso" >
                    <button style={{fontSize:15}} onClick = {props.agregarProceso}>Agregar Proceso</button> 
                </div>
            </div>
    )
}
const mapStateToProps = state=>{
    return {
        procesos: state
    }
} 

const mapDispatchToProps = dispatch =>({
    agregarProceso: ()=> dispatch(agregarProceso()),
    eliminarProceso: index => dispatch(eliminarProceso(index)),
    modificarProceso1: (payload,index) => dispatch(modificarProceso1(payload,index)),
    modificarCheck: (index) => dispatch(modificarCheck(index)),
    modificarInputs: (index,valores) => dispatch(modificarInputs(index,valores))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);