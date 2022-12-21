import React, { useState} from "react"
import VentanaPrincipal from "./ventana-principal"
import Tabla from "./tabla"
import { connect} from "react-redux"
import { agregarProceso,eliminarProceso,modificarProceso1,modificarCheck, modificarInputs} from "../Reducers/inputs";
import '../Styles/show-more.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle, faCaretDown} from "@fortawesome/free-solid-svg-icons"
import VentanaExito from "./ventana-emergente/ventana-exito";
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
    },
}

function ShowMore(props) {
        const todosProcesos = props.procesos.user.procesos
        const [botonEditar,setBotonEditar] = useState(false);
        const [botonEditar2,setBotonEditar2] = useState(false);

        const [botonConfirmar,setBotonConfirmar] = useState(false);
        /* console.log(todosProcesos) */
        let objeto = {}
        const [index,setIndex] = useState(0)
        const [index2,setIndex2] = useState(0)

        /* Función para obtener el index del botón presionado */
        const handler = function(e){
            setIndex(e.target.getAttribute("data-index")); //will log the index of the clicked item
        };
        const handler2 = function(index){
            setIndex2(index); //will log the index of the clicked item
        };
        return(
            <div className="principal-container">
                {todosProcesos.map((data,i)=>{
                    let numeroProceso = `Proceso ${String(i+1).padStart(3, '0')}`
                    objeto = {...data}

                    return(
                        <div className="proceso" key={numeroProceso}>
                            {/*NOMBRE DEL PROCESO*/}
                            <div className="CRUD-container">
                            {/* 1 */}
                                <input className="nombreProceso" placeholder={numeroProceso} type="text" value={objeto.nombreProceso} onChange={(e)=>
                                    props.modificarProceso1(e.target.value,i)}/>
                                {/* 2 */}
                                <div style={{justifySelf: "end", display: "flex", alignItems: "center"}}>
                                    {/* EDITAR */}
                                    <button style={CSS.button} data-index={i} className="btnEditar" onClick={(e)=>{
                                            e.preventDefault()
                                            setBotonEditar(true)
                                            handler(e)
                                        }
                                    }
                                    >Editar</button>
                                    {/* ELIMINAR */}
                                    <button style={CSS.button} className="btnEliminar" onClick={()=>{props.eliminarProceso(i)
                                    handler2(0)
                                    }
                                    }>Eliminar</button>
                                    {/* DESPLEGAR */}
                                    <FontAwesomeIcon data-index2={i} onClick={
                                        (e)=>{
                                            e.preventDefault()
                                            setBotonEditar2(true)
                                            handler2(i)
                                        }
                                    }icon={faCaretDown} style={{color:"#FC4D19", fontSize: 35, cursor: "pointer", margin: "0px 10px"}}/>
                                </div>
                                {/* 3 */}
                            </div>
                                {/* SELECCIONAR */}
                                <div className="checkbox-wrapper-13">
                                    <input className="c1-13" type="checkbox" checked={objeto.procesoComun} onChange={
                                    ()=>props.modificarCheck(i)
                                    }/>
                                    <label for="c1-13"></label>
                                </div>
                        </div>
                    )
                }
                )}
                { (todosProcesos[parseInt(index2)] != null) ? <Tabla index={index} trigger2={botonEditar2} setTrigger2={setBotonEditar2}/>: ""}
                {/* VENTANA principal */}
                <VentanaPrincipal index={parseInt(index)} FTEvalue={todosProcesos[parseInt(index)]} onSubmit = {(payload)=>{
                    props.modificarInputs(parseInt(index),payload)
                    setBotonConfirmar(true);
                }} trigger={botonEditar} setTrigger = {setBotonEditar}/>
                {/* AGREGAR PROCESO */}
                <div className="agregar-proceso" >
                    <button style={{fontSize:17, display: "flex", alignItems: "center"}} onClick = {props.agregarProceso}><FontAwesomeIcon style={{color: "#4427F8", marginRight: 5}} icon={faPlusCircle}/> Agregar Proceso</button> 
                </div>
                {/* VENTANA exito */} 
                <VentanaExito botonConfirmar={botonConfirmar} setBotonConfirmar={setBotonConfirmar} />
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
    modificarInputs: (index,valores) => dispatch(modificarInputs(index,valores)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);