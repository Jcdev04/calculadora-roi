import React, { Component } from "react"
import '../Styles/tabla.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import VentanaFormula from "./ventana-emergente/ventana-formula"

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
    constructor(props){
        super(props);
        this.state={
            trigger: false,
            content:{
                costoAnual: {
                    nombre: "Costo anual",
                    formula: "P x F x SA",
                    leyenda: [
                        "P = número de personas",
                        "F = FTE",
                        "SA= salario promedio anual"
                    ]
                },
                horasAnuales: {
                    nombre: "Horas anuales invertidas",
                    formula: "P x H x D x 52",
                    leyenda: [
                        "H = Horas por día",
                        "D = Días laborables por semana",
                        "P = Número de personas",
                        "52 = Semanas en el año"
                    ]
                },
                costoRobot:{
                    nombre: "Costo total por el robot",
                    formula: "I + CE",
                    leyenda: [
                        "I = Costo por implementación (solo el primer año)",
                        "CE = Suma de todos los costos extras",
                    ]
                },
                netROI:{
                    nombre: "Net ROI",
                    formula: "CA - CR",
                    leyenda: [
                        "CA = Costo anual actualmente",
                        "CR = Costo anual con el robo",
                    ]
                },
                /* ROI ACUMULADO */
                ROIAcumulado1:{
                    nombre: "ROI anual acumulado 1",
                    formula: "(NR x 100) / CT",
                    leyenda: [
                        "NR = Net ROI",
                        "CR = Costo anual con el robot",
                    ]
                },
                ROIAcumulado2_5:{
                    nombre: "ROI anual acumulado (2-5)",
                    formula: "((CA - M) x A + NR) / ((C + (M x A)) x 100)",
                    leyenda: [
                        "CA = Costo anual actualmente",
                        "C = Costo de implementación",
                        "M = Mantenimiento",
                        "NR = Net ROI",
                        "A = año - 1"
                    ]
                },
            },
            contentMostrarAux: {}
        }
    }

    
    render(){
        const {trigger2, setTrigger2,tabla} = this.props
        /* Extraemos la tabla */
        const { trigger, content, contentMostrarAux} = this.state

        let notANumber = true
        /* CONTENIDO que irá dentro de la fórmula */

        /* VERIFICAR que al momento de procesor todo esté bien */
        if(tabla!=null){
            if(isNaN(tabla.fila1_Y1Y5) || isNaN(tabla.fila2_Y1Y5) || isNaN(tabla.fila5_Y1)){
                notANumber = false
            }
        }
        /* ABRIOCERRAR ventanas */
        const setTrigger = (content)=>()=>{
            this.setState(state=>({
                trigger: !state.trigger,
                contentMostrarAux: {...content}
            }))
            
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
                        <td data-label="Items"><FontAwesomeIcon onClick={setTrigger(content.costoAnual)} style={CSS.moreInfo} icon={faCircleInfo} />Costos anuales por las horas dedicadas a realizar este trabajo</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila1_Suma)}</td>
                    </tr>
                    <tr className="row3">
                        <td data-label="Items"><FontAwesomeIcon onClick={setTrigger(content.horasAnuales)} style={CSS.moreInfo} icon={faCircleInfo} />Horas dedicadas a esta actividad en cada año por todos los trabajadores</td>
                        <td className="content" data-label="1 AÑO">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="2 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribirHoras(tabla.fila2_Suma)}</td>
                    </tr>
                    <tr>
                        <td data-label="Items"><FontAwesomeIcon onClick={setTrigger(content.costoRobot)} style={CSS.moreInfo} icon={faCircleInfo} />Costo total anual por implementación del bot (1 año) mantenimiento (+5 años)</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila3_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila3_Suma)}</td>
                    </tr>
                    <tr className="net-roi">
                        <td data-label="Items"><FontAwesomeIcon onClick={setTrigger(content.netROI)} style={CSS.moreInfo} icon={faCircleInfo} />Net ROI</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila4_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila4_Suma)}</td>
                    </tr>
                    <tr className="roi-acumulado">
                        <td data-label="Items"><FontAwesomeIcon onClick={setTrigger(content.ROIAcumulado1)} style={{...CSS.moreInfo, color:"#FC4D19"}} icon={faCircleInfo} /> <FontAwesomeIcon onClick={setTrigger(content.ROIAcumulado2_5)} style={{...CSS.moreInfo, color: "FFD848"}} icon={faCircleInfo}/>ROI acumulado anual</td>
                        <td className="content" data-label="1 AÑO">{escribirPorcentaje(tabla.fila5_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribirPorcentaje(tabla.fila5_Y2)}</td>
                        <td className="content" data-label="3 AÑOS">{escribirPorcentaje(tabla.fila5_Y3)}</td>
                        <td className="content" data-label="4 AÑOS">{escribirPorcentaje(tabla.fila5_Y4)}</td>
                        <td className="content" data-label="5 AÑOS">{escribirPorcentaje(tabla.fila5_Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">-</td>
                    </tr>
                </tbody>
            </table>

            <VentanaFormula contentMostrar={contentMostrarAux} trigger={trigger} setTrigger={setTrigger()} />    
            
            </div>
        )}else {
            return ""
        };
    }
}

const mapStateToProps = (state,ownProps)=>{
    try {
        return {
            tabla: state.user.procesos[ownProps.index].tabla
        }
    } catch (error) {
        
        return {tabla: {}}
    }   
} 
export default connect(mapStateToProps)(Tabla);