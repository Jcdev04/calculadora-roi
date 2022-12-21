import React, { Component } from "react"
import '../Styles/tabla.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const CSS={    
    principalBox:{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.2)",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        padding: 10
    },
    tabla: {
        maxWidth: 750,
        width: "100%",
        position: "relative",
        padding: "20px 30px",
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "-20px -20px 60px #FFDDD3, 20px 20px 60px #dfdfdf",
    },
    close:{
        padding: "5px 15px", 
        fontSize:17,
        zIndex:2,
        borderRadius:20,
        color: "white",
        backgroundColor: "#b81522",
        border: "none",
        cursor: "pointer"
    },
    containerBotones:{
        maxWidth: 750,
        zIndex: 2,
        width: "100%",
        display:"flex",
        justifyContent: "end",
    },
    moreInfo:{
        color: "#c80b0b",
        fontSize: 12,
        marginRight: 3,
        cursor: "pointer"
    }
}
 class Tabla extends Component {
    render(){
        const {trigger2, setTrigger2} = this.props
        /* Extraemos la tabla */
        const {tabla} = this.props
        let notANumber = true
        /* VERIFICAR que al momento de procesor todo esté bien */
        if(tabla!=null){
            if(isNaN(tabla.fila1_Y1Y5) || isNaN(tabla.fila2_Y1Y5) || isNaN(tabla.fila5_Y1)){
                notANumber = false
            }
        }

        function escribir(valor){
            return notANumber ? `$${valor.toFixed()}`: "-"
        }
        function escribirHoras(valor){
            return notANumber ? `${valor.toFixed()}`: "-" 
        }
        function escribirPorcentaje(valor){
            return notANumber ? `${valor.toFixed()}%`: "-" 
        }
        
        if(trigger2){ 
            return(
            <div style={CSS.principalBox}>  
            <div style={CSS.containerBotones}>
                <button style={CSS.close} onClick={()=>setTrigger2(false)}>
                <FontAwesomeIcon style={{marginRight:5}} icon={faCircleXmark} />
                Cerrar</button>  
            </div>
            <table style={{...CSS.tabla,margin:10}} className="table">
                <thead>
                    <th>Ítems</th>
                    <th>1 AÑO</th>
                    <th>2 AÑOS</th>
                    <th>3 AÑOS</th>
                    <th>4 AÑOS</th>
                    <th>5 AÑOS</th>
                    <th>5 AÑOS EN TOTAL</th>
                </thead>
                <tbody>
                    <tr className="row2">
                        <td data-label="Items"><FontAwesomeIcon style={CSS.moreInfo} icon={faCircleInfo} />Costos anuales por las horas dedicadas a realizar este trabajo</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila1_Suma)}</td>
                    </tr>
                    <tr className="row3">
                        <td data-label="Items"><FontAwesomeIcon style={CSS.moreInfo} icon={faCircleInfo} />Horas dedicadas a esta actividad en cada año por todos los trabajadores</td>
                        <td className="content" data-label="1 AÑO">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="2 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribirHoras(tabla.fila2_Suma)}</td>
                    </tr>
                    <tr>
                        <td data-label="Items"><FontAwesomeIcon style={CSS.moreInfo} icon={faCircleInfo} />Costo total anual por implementación del bot (1 año) mantenimiento (+5 años)</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila3_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila3_Suma)}</td>
                    </tr>
                    <tr className="net-roi">
                        <td data-label="Items"><FontAwesomeIcon style={CSS.moreInfo} icon={faCircleInfo} />Net ROI</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila4_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila4_Suma)}</td>
                    </tr>
                    <tr className="roi-acumulado">
                        <td data-label="Items"><FontAwesomeIcon style={{...CSS.moreInfo, color:"#FC4D19"}} icon={faCircleInfo} /> <FontAwesomeIcon style={{...CSS.moreInfo, color: "FFD848"}} icon={faCircleInfo}/>ROI acumulado anual</td>
                        <td className="content" data-label="1 AÑO">{escribirPorcentaje(tabla.fila5_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribirPorcentaje(tabla.fila5_Y2)}</td>
                        <td className="content" data-label="3 AÑOS">{escribirPorcentaje(tabla.fila5_Y3)}</td>
                        <td className="content" data-label="4 AÑOS">{escribirPorcentaje(tabla.fila5_Y4)}</td>
                        <td className="content" data-label="5 AÑOS">{escribirPorcentaje(tabla.fila5_Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">-</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )}else {
           return ""
        };
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        tabla: state.user.procesos[ownProps.index].tabla
    }
} 
export default connect(mapStateToProps)(Tabla);