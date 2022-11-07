import React, { useState, Component } from "react"
import VentanaPrincipal from "./ventana-principal"
import { connect, useDispatch } from "react-redux"
import { agregarProceso,eliminarProceso,modificarProceso1,modificarCheck } from "../Reducers/inputs";
import { click } from "@testing-library/user-event/dist/click";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function ShowMore(props) {
        const todosProcesos = props.procesos.user.procesos

        const [botonEditar,setBotonEditar] = useState(false)
        const handleSubmit = payload=>{
            console.log(payload)
        }
        
        return(
            <div>
                {todosProcesos.map((data,i)=>{
                    let numeroProceso = `Proceso ${String(i+1).padStart(3, '0')}`
                    const objeto = {...data}
                    return(
                        <div key={numeroProceso}>
                            {/* NOMBRE DEL PROCESO */}
                            <input placeholder={numeroProceso} type="text" value={objeto.nombreProceso} onChange={(e)=>
                                props.modificarProceso1(e.target.value,i)}/>
                            {/* EDITAR */}
                            <button onClick={(e)=>{
                                    e.preventDefault()
                                    setBotonEditar(true)
                                }
                            }
                            >Editar</button>
                            {/* ELIMINAR */}
                            <button onClick={()=>props.eliminarProceso(i)}>Eliminar</button>
                            {/* DESPLEGAR */}
                            <button onClick={
                                (e)=>{
                                    e.preventDefault()
                                }
                            }>Desplegar</button>
                            {/* SELECCIONAR */}
                            <input type="checkbox" checked={objeto.procesoComun} onChange={
                                ()=>props.modificarCheck(i)
                            }/>
                            <VentanaPrincipal onSubmit = {(payload)=>console.log(payload)} trigger={botonEditar} setTrigger = {setBotonEditar}/>
                        </div>
                    )
                }
                )}   
              <button onClick = {props.agregarProceso}>Agregar Proceso</button> 
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
    modificarCheck: (index) => dispatch(modificarCheck(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);