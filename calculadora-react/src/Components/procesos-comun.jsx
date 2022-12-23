import React,{Component} from "react";
import { connect} from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons";
import "../Styles/proceso-comun.css"
const CSS = {
    principalContainer:{
        maxWidth: 650,
        width: "100%",
        margin: "30px auto",
        padding: "10px 35px",
        boxShadow: "0px 5px 16px rgba(0, 0, 0, 0.27)",
        borderRadius: "20px",
        boxSizing: "border-box"
    },
    titulo:{
        fontSize: 30,
        fontWeight: 600,
        color: "#FC4D19",
        margin: "8px 0px"
    },  
    subtitulo:{
        fontSize: 15,
        margin: 0,
        marginBottom: 40
    },
    precios:{
        fontSize: 20,
        fontWeight: 400,
        margin: "15px 0",
        color:"#2E2E2E"
    },
    boxProceso:{
        borderTop: "1px solid #8D8D8E",
        padding: "0 20px",
        display:"flex", 
        justifyContent:"space-between"
    }
}    
class ProcesosComun extends Component{
    

    render(){
        const {procesos} = this.props
        let arreglo = procesos.user.procesos.filter((i)=>i.procesoComun)
        let sumaTotal =0;
        return(arreglo.length>0 ? (
            <div style={{ padding: "0 10px"}}>
            <div className="contenedorPrincipal" style={CSS.principalContainer}>
                <h1 style={CSS.titulo}>Procesos en común:</h1>
                <p style={CSS.subtitulo}>Selecciona los procesos que consideres en común y obtén la suma de sus precios</p>
                {
                    /* MOSTRAMOS todos los valores seleccionados */
                    arreglo.map((valores,i)=>{
                        let mantenimiento = 0 
                        for (const element of valores.costosExtras) {
                            mantenimiento+=element.precioExtra
                        }  
                        let costoImplementacion = valores.costoImplementacion;
                        let total = costoImplementacion + (mantenimiento*4)
                        if(isNaN(total)){
                            total=0
                        }
                        sumaTotal+=total
                        let key = "Proceso"+i
                        return(
                            <div key={key} style={CSS.boxProceso}>
                                <h2 style={CSS.precios}>{valores.nombreProceso!==""?`${valores.nombreProceso}`:`Proceso ${String(i+1).padStart(3, '0')}`}</h2>
                                <h2 style={CSS.precios}><FontAwesomeIcon style={{color:"#43CA40"}} icon={faDollarSign}/>{total.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                            </div>
                        )
                    })
                }
                <div style={{...CSS.boxProceso,border: "1px solid #FC4D19", borderRadius:10, marginBottom: 10, boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
                    <h2 style={{...CSS.precios, color: "#FC4D19", fontWeight: 500}}>Suma total</h2>
                    <h2 style={{...CSS.precios, color: "#FC4D19", fontWeight: 500}}><FontAwesomeIcon style={{color:"#43CA40"}} icon={faDollarSign}/>{sumaTotal.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </div>
            </div>
            </div>
        ):"")
    }
}

const mapStateToProps = state=>{
    return {
        procesos: state
    }
}

export default connect(mapStateToProps)(ProcesosComun);