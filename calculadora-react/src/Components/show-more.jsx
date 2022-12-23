import React, { useState} from "react"
import VentanaPrincipal from "./ventana-principal"
import Tabla from "./tabla"
import { connect} from "react-redux"
import { agregarProceso,eliminarProceso,modificarProceso1,modificarCheck, modificarInputs} from "../Reducers/inputs";
import '../Styles/show-more.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle, faCaretDown, faTrash, faEdit} from "@fortawesome/free-solid-svg-icons"
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
    iconos:{
        border: "none",
        borderRadius: "15px",
        height: "28px",
        margin: "0 2.5px",
        fontSize: "17px",
        cursor: "pointer",
        transition: "all ease-in 100ms",
        color: "#232323",
    }
}

function ShowMore(props) {
        const todosProcesos = props.procesos.user.procesos
        const [botonEditar,setBotonEditar] = useState(false);
        const [botonEditar2,setBotonEditar2] = useState(false);

        const [botonConfirmar,setBotonConfirmar] = useState(false);
        /* console.log(todosProcesos) */
        let objeto = {}
        const [index,setIndex] = useState(0)

        /* Función para obtener el index del botón presionado */
        const handler = (i)=>{
            setIndex(i); //will log the index of the clicked item
        };
        /* EDITAR */
        const editar = (i)=>()=>{
            setBotonEditar(true)
            handler(i)
        }
        /* ELIMINAR */
        const eliminar = (i)=>()=>{
            if(todosProcesos.length>1){
                props.eliminarProceso(i)
            }else{
                alert("No se puede eliminar el último proceso")
            }
        }
        /* DESPLEGAR */
        const desplegar = (i)=>()=>{
            setBotonEditar2(true)
            handler(i)
        }
        /* SUBMIT */
        const submit = (payload)=>{
            props.modificarInputs(parseInt(index),payload)
            setBotonConfirmar(true);
        }

        return(
            <div className="principal-container">
                {todosProcesos.map((data,i)=>{
                    let numeroProceso = `Proceso ${String(i+1).padStart(3, '0')}`
                    objeto = {...data}

                    return(
                        <div className="proceso" style={{padding:"0 10px"}} key={numeroProceso}>
                            {/*NOMBRE DEL PROCESO*/}
                            <div className="CRUD-container">
                            {/* 1 */}
                                {/* NOMBRE */}
                                <input className="nombreProceso" placeholder={numeroProceso} type="text" value={objeto.nombreProceso} onChange={(e)=>
                                    props.modificarProceso1(e.target.value,i)}/>
                                {/* 2 */}
                                <div className="botonesCRUD" style={{ display: "flex", alignItems: "center", justifySelf: "end"}}>
                                    {/* EDITAR */}
                                    <button onClick={editar(i)} className="botonIcono" style={{...CSS.iconos,backgroundColor:"#ffd555"}}>
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </button>
                                    <button  style={CSS.button}  className="btnEditar" onClick={editar(i)}
                                    > 
                                    Editar</button>
                                    {/* ELIMINAR */}
                                    <button onClick={eliminar(i)} className="botonIcono" style={{...CSS.iconos, backgroundColor:"#FF0015"}}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                    <button  style={CSS.button} className="btnEliminar" onClick={eliminar(i)}>Eliminar</button>
                                    {/* DESPLEGAR */}
                                    <FontAwesomeIcon onClick={desplegar(i)} icon={faCaretDown} style={{color:"#FC4D19", fontSize: 35, cursor: "pointer", margin: "0px 10px"}}/>
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
                { (todosProcesos[parseInt(index)] != null) ? <Tabla index={index} trigger2={botonEditar2} setTrigger2={setBotonEditar2}/>: ""}
                {/* VENTANA principal */}
                <VentanaPrincipal index={parseInt(index)} FTEvalue={todosProcesos[parseInt(index)]} onSubmit={payload=>submit(payload)} trigger={botonEditar} setTrigger = {setBotonEditar}/>
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