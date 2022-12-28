import React, { Component } from "react"
import '../Styles/tabla.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleXmark, faCircleInfo, faEye} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import VentanaFormula from "./ventana-emergente/ventana-formula"
import VentanaDatosBrutos from "./ventana-datosBrutos"
/* SLIDER */
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'


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
        padding: "0 15px",
        boxSizing: "border-box"

    },
    tabla: {
        maxWidth: 850,
        width: "100%",
        position: "relative",
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "-20px -20px 60px #FFDDD3, 20px 20px 60px #dfdfdf",
        overflow: "hidden",
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
    verDatos:{
        padding: "5px 15px", 
        fontSize:17,
        zIndex:2,
        borderRadius:20,
        color: "white",
        backgroundColor: "#EE911D",
        border: "none",
        cursor: "pointer",
        marginRight: 10
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
            triggerDB: false,
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
        const {trigger2, setTrigger2,tabla, index} = this.props
        /* Extraemos la tabla */
        const { trigger,triggerDB, content, contentMostrarAux} = this.state

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
        const setTriggerDB = ()=>()=>{
            this.setState(state=>({
                triggerDB: !state.triggerDB,
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
                {/* VENTANA DATOS BRUTOS */}
                <button style={CSS.verDatos} onClick={setTriggerDB()}>
                    <FontAwesomeIcon style={{marginRight:5}} icon={faEye}/>
                    Ver datos
                </button>
                {/* VENTANA DATOS BRUTOS */}
                <button style={CSS.close} onClick={()=>setTrigger2(false)}>
                    <FontAwesomeIcon style={{marginRight:5}} icon={faCircleXmark} />
                    Cerrar
                </button>  
            </div>
            <div style={{...CSS.tabla,margin:10}} className="tabla">
                <div className="items">
                    <div className="cabecera-box"><h2 className="cabecera">Ítems</h2></div>
                    <div className="item1 "><p><FontAwesomeIcon onClick={setTrigger(content.costoAnual)} style={CSS.moreInfo} icon={faCircleInfo} />Costos anuales por las horas dedicadas a realizar este trabajo</p></div>
                    <div className="item2 "><p><FontAwesomeIcon onClick={setTrigger(content.horasAnuales)} style={CSS.moreInfo} icon={faCircleInfo} />Horas dedicadas a esta actividad en cada año por todos los trabajadores</p></div>
                    <div className="item3 "><p><FontAwesomeIcon onClick={setTrigger(content.costoRobot)} style={CSS.moreInfo} icon={faCircleInfo} />Costo total anual por implementación del bot (1 año) mantenimiento (+5 años)</p></div>                
                    <div className="item4 net-roi"><p><FontAwesomeIcon onClick={setTrigger(content.netROI)} style={CSS.moreInfo} icon={faCircleInfo} />Net ROI</p></div>
                    <div className="item5 roi-acumulado"><p><FontAwesomeIcon onClick={setTrigger(content.ROIAcumulado1)} style={{...CSS.moreInfo, color:"#FC4D19"}} icon={faCircleInfo} /> <FontAwesomeIcon onClick={setTrigger(content.ROIAcumulado2_5)} style={{...CSS.moreInfo, color: "FFD848"}} icon={faCircleInfo}/>ROI acumulado anual</p></div>  
                </div>
                <Swiper slidesPerView={6}
                    spaceBetween={0}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      240: {
                        slidesPerView: 1,
                      },
                      400:{
                        slidesPerView: 2,
                      },
                      500:{
                        slidesPerView: 3,
                      },
                      678: {
                        slidesPerView: 4,
                      },
                      850: {
                        slidesPerView: 6,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="cabecera-box"><h2 className="cabecera">1 AÑO</h2></div>
                        <div className="item1"><h3>{escribir(tabla.fila1_Y1Y5)}</h3></div>
                        <div className="item2"><h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3></div>
                        <div className="item3"><h3>{escribir(tabla.fila3_Y1)}</h3></div>                
                        <div className="item4"><h3>{escribir(tabla.fila4_Y1)}</h3></div>
                        <div className="item5"><h3>{escribirPorcentaje(tabla.fila5_Y1)}</h3></div>                                           
                    </SwiperSlide>               
                    <SwiperSlide>
                        <div className="cabecera-box"><h2 className="cabecera">2 AÑOS</h2></div>
                        <div className="item1"><h3>{escribir(tabla.fila1_Y1Y5)}</h3></div>
                        <div className="item2"><h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3></div>
                        <div className="item3"><h3>{escribir(tabla.fila3_Y2Y5)}</h3></div>                
                        <div className="item4"><h3>{escribir(tabla.fila4_Y2Y5)}</h3></div>
                        <div className="item5"><h3>{escribirPorcentaje(tabla.fila5_Y2)}</h3></div>                                         
                    </SwiperSlide>               
                    <SwiperSlide>
                        <div className="cabecera-box"><h2 className="cabecera">3 AÑOS</h2></div>
                        <div className="item1"><h3>{escribir(tabla.fila1_Y1Y5)}</h3></div>
                        <div className="item2"><h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3></div>
                        <div className="item3"><h3>{escribir(tabla.fila3_Y2Y5)}</h3></div>                
                        <div className="item4"><h3>{escribir(tabla.fila4_Y2Y5)}</h3></div>
                        <div className="item5"><h3>{escribirPorcentaje(tabla.fila5_Y3)}</h3></div>                                           
                    </SwiperSlide>               
                    <SwiperSlide>
                        <div className="cabecera-box"><h2 className="cabecera">4 AÑOS</h2></div>
                        <div className="item1"><h3>{escribir(tabla.fila1_Y1Y5)}</h3></div>
                        <div className="item2"><h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3></div>
                        <div className="item3"><h3>{escribir(tabla.fila3_Y2Y5)}</h3></div>                
                        <div className="item4"><h3>{escribir(tabla.fila4_Y2Y5)}</h3></div>
                        <div className="item5"><h3>{escribirPorcentaje(tabla.fila5_Y4)}</h3></div>                                         
                    </SwiperSlide>               
                    <SwiperSlide>
                        <div className="cabecera-box"><h2 className="cabecera">5 AÑOS</h2></div>
                        <div className="item1"><h3>{escribir(tabla.fila1_Y1Y5)}</h3></div>
                        <div className="item2"><h3>{escribirHoras(tabla.fila2_Y1Y5)}</h3></div>
                        <div className="item3"><h3>{escribir(tabla.fila3_Y2Y5)}</h3></div>                
                        <div className="item4"><h3>{escribir(tabla.fila4_Y2Y5)}</h3></div>
                        <div className="item5"><h3>{escribirPorcentaje(tabla.fila5_Y5)}</h3></div>                                     
                    </SwiperSlide>               
                    <SwiperSlide>
                        <div className="cabecera-box"><h2 className="cabecera">5 AÑOS EN TOTAL</h2></div>
                        <div className="item1"><h3>{escribir(tabla.fila1_Suma)}</h3></div>
                        <div className="item2"><h3>{escribirHoras(tabla.fila2_Suma)}</h3></div>
                        <div className="item3"><h3>{escribir(tabla.fila3_Suma)}</h3></div>                
                        <div className="item4"><h3>{escribir(tabla.fila4_Suma)}</h3></div>
                        <div className="item5"><h3>-</h3></div>                                         
                    </SwiperSlide>               
                </Swiper>
            </div>

            <VentanaFormula contentMostrar={contentMostrarAux} trigger={trigger} setTrigger={setTrigger()} />    
            <VentanaDatosBrutos index={index} trigger={triggerDB} setTrigger={setTriggerDB()}/>
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