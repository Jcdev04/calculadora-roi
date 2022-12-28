import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging, faPercent, faBagShopping, faRobot, faMoneyBill, faAngleDown, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import "../Styles/ventana-datos-brutos.css";

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
        zIndex: 5,
        boxSizing: "border-box",
    },
    containerTabla: {
        maxWidth: 890,
        width: "100%",
        position: "relative",
        backgroundColor: "white",
        borderRadius: 15,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
    },
    tabla: {
        width: "100%",
        display: "grid",
        zIndex: 2,
    },
    containerCircle:{
        borderRadius: "50%",
        position: "absolute",
        width: 335,
        height: 335,
        
        zIndex: 1,
    },
    titleCirle:{
        fontSize: 45,
    },
    header:{
        height: 80,     
        backgroundColor: "#FC4D19"
    },
    headerFont:{
        color: "white",
    },
    content1:{
        padding: "15px 10px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        height: 43.2,
        fontSize: 18
    },
    content2:{
        padding: "15px 10px",
        display: "flex",
        alignItems: "center",
        backgroundColor:"#FFDFD6",
        height: 43.2,
        fontSize: 18
    },
    icon:{
        color: "#606060",
        fontSize: 20,
    },
    contentFont:{
        fontSize: 16,
    },
    btnCerrar:{
        cursor: "pointer",  
        padding: "5px 13px",
        borderRadius: 15,
        border: "none",
        width: 250,
        height: 50,
        fontSize: 25,
        marginTop: 30,
        backgroundColor: "#FC4D19",
        color: "white",
    },
    verMas:{
        cursor: "pointer",
        color:"#FC4D19"
    },
    verMasContainer:{
        fontSize: 15,
        padding: 10,
    },
}

class VentanaDatosBrutos extends Component{
    constructor(props){
        super(props);
        this.state={
            verMas1: false,
            rotateVM1: 0,
            verMas2: false,
            rotateVM2: 0,
            active1: true,
            rotate1: 0,
            active2: true,
            rotate2: 0,
            active3: true,
            rotate3: 0,
            active4: true,
            rotate4: 0,
            active5: true,
            rotate5: 0,
        }
    }
    
    
    render(){
        const {trigger,setTrigger, datos} = this.props;
        const {verMas1, verMas2, rotateVM1, rotateVM2, active1, active2, active3, active4, active5, rotate1, rotate2, rotate3, rotate4, rotate5} = this.state;
        
        function escribir(valor){
            return (valor===undefined||isNaN(valor)? 0 : valor)
        }
        
        const activar1 = ()=>()=>{
            this.setState({
                active1: !this.state.active1,
                rotate1: this.state.rotate1===0 ? 180 : 0
            })
        }
        const activar2 = ()=>()=>{
            this.setState({
                active2: !this.state.active2,
                rotate2: this.state.rotate2===0 ? 180 : 0
            })
        }
        const activar3 = ()=>()=>{
            this.setState({
                active3: !this.state.active3,
                rotate3: this.state.rotate3===0 ? 180 : 0
            })
        }
        const activar4 = ()=>()=>{
            this.setState({
                active4: !this.state.active4,
                rotate4: this.state.rotate4===0 ? 180 : 0
            })
        }
        const activar5 = ()=>()=>{
            this.setState({
                active5: !this.state.active5,
                rotate5: this.state.rotate5===0 ? 180 : 0
            })
        }
        
        const cerrarVerMas1=()=>()=>{
            this.setState(state=>({
                verMas1: !state.verMas1,
                verMas2 : false,
                rotateVM1: state.rotateVM1===0 ? 180 : 0,
                rotateVM2: 0,
            }))
        }
        const cerrarVerMas2=()=>()=>{
            this.setState(state=>({
                verMas2: !state.verMas2,
                verMas1 : false,
                rotateVM1: 0,
                rotateVM2: state.rotateVM2===0 ? 180 : 0,
            }))
        }

        return( trigger ?
            <div style={CSS.principalBox}>
                <div className='container-tabla' style={CSS.containerTabla}>
                    <div className='container-circle' style={CSS.containerCircle}>
                        <h2 className="title-circle" style={CSS.titleCirle}>Resumen</h2>
                    </div>
                    <div className='tabla-datosBrutos' style={CSS.tabla}>
                        {/* PRIMERA COLUMNA */}
                        <div className='first-column'>
                            {/* PRIMERAFILA */}
                            <div className="cabecera-2" style={CSS.header}><h2 style={CSS.headerFont}>DATOS</h2></div>
                            <div className="content" style={CSS.content1}>
                            <div style={{display: "flex",alignItems:"center"}}>
                                <div className='icon'><FontAwesomeIcon  style={CSS.icon} icon={faPersonDigging}/></div>
                                {active1 ?
                                    <p>Trabajadores actualmente</p>:
                                    <p>{datos.nPersonas}</p>
                                }
                            </div>
                            <div onClick={activar1()} className='flechaDerecha'>
                                <FontAwesomeIcon style={{color:"#FF805A", transform: `rotate(${rotate1}deg)`}} className="animarFaAngle" icon={faAngleRight}/>
                            </div>

                            </div>
                            {/* SEGUNDAFILA */}
                            <div className="content" style={CSS.content2}>
                            <div style={{display: "flex", alignItems:"center"}}>
                                <div className='icon'><FontAwesomeIcon  style={CSS.icon} icon={faPercent}/></div>
                                {active2 ?
                                    <p>Porcentaje de tiempo invertido</p>:
                                    <p>{escribir(datos.tabla.FTEresultado)*100}%</p>
                                }
                            </div>
                            <div onClick={activar2()} className='flechaDerecha'>
                                <FontAwesomeIcon style={{color:"#FF805A", transform: `rotate(${rotate2}deg)`}} className="animarFaAngle" icon={faAngleRight}/>
                            </div>
                            </div>
                            
                            {/* VERMAS 1 NOMBRES*/}
                            {verMas1?
                            <div style={CSS.verMasContainer}>
                                <p>N° de operaciones diarias por persona </p>
                                <p>Horas trabajadas por día</p>
                                <p>Días laborables por semana</p>
                                <p>Tiempo por operación en minutos</p>
                                <p>Desempeño del encargado del proceso</p>
                            </div> 
                            :""}

                            {/* TERCERAFILA */}
                            <div className="content" style={CSS.content1}>
                            <div style={{display: "flex",alignItems:"center"}}>
                                <div className='icon'><FontAwesomeIcon  style={CSS.icon} icon={faBagShopping}/></div>
                                {active3 ?
                                    <p>Salario promedio mensual de las personas</p>:
                                    <p>${datos.salarioPromedio}</p>
                                }
                            </div>
                            <div onClick={activar3()} className='flechaDerecha'>
                                <FontAwesomeIcon style={{color:"#FF805A", transform: `rotate(${rotate3}deg)`}} className="animarFaAngle" icon={faAngleRight}/>
                            </div>
                            
                            </div>
                            {/* CUARTAFILA */}
                            <div className="content" style={CSS.content2}>
                            <div style={{display: "flex",alignItems:"center"}}>
                                <div className='icon'><FontAwesomeIcon  style={CSS.icon} icon={faRobot}/></div>
                                {active4 ?
                                    <p>Costo por la implementación del robot</p>:
                                    <p>${datos.costoImplementacion}</p>
                                }
                            </div>
                            <div onClick={activar4()} className='flechaDerecha'>
                                <FontAwesomeIcon style={{color:"#FF805A", transform: `rotate(${rotate4}deg)`}} className="animarFaAngle" icon={faAngleRight}/>
                            </div>
                            </div>
                            {/* QUINTAFILA */}
                            <div className="content" style={CSS.content1}>
                            <div style={{display: "flex",alignItems:"center"}}>
                                <div className='icon'><FontAwesomeIcon  style={CSS.icon} icon={faMoneyBill}/></div>
                                {active5 ?
                                    <p>Costos extras</p>:
                                    <p>${escribir(datos.tabla.mantenimiento)}</p>
                                }
                            </div>
                            <div onClick={activar5()} className='flechaDerecha'>
                                <FontAwesomeIcon style={{color:"#FF805A", transform: `rotate(${rotate5}deg)`}} className="animarFaAngle" icon={faAngleRight}/>
                            </div>
                            </div>
                            {/* VERMAS 2 Nombres */}
                            {verMas2?
                            <div style={{...CSS.verMasContainer,height: 120}}>
                                {
                                    datos.costosExtras.map((item,index)=>{
                                        let key = "CostoExtra"+index;
                                        return(
                                            <p key={key}>{item.nombreExtra}</p>
                                        )
                                    })
                                }
                            </div> 
                            :""}
                        </div>
                        {/* SEGUNDA COLUMNA */}
                        <div className='eliminar' style={{borderRight:"solid 1px #EFEFEF"}}>
                            <div className="cabecera-2" style={CSS.header}><h2 style={CSS.headerFont}>RESULTADOS</h2></div>
                            <div style={{...CSS.content1, justifyContent:"center"}}><p>{datos.nPersonas}</p></div>
                            <div style={{...CSS.content2, justifyContent:"center"}}><p>{escribir(datos.tabla.FTEresultado)*100}%</p></div>
                            
                            {/* VERMAS 1 VALORES */}
                            {verMas1?
                            <div style={{...CSS.verMasContainer, textAlign: "center"}}>
                                <p>{datos.FTE.nOpDiarias}</p>
                                <p>{datos.FTE.hTrabajadasXDia}</p>
                                <p>{datos.FTE.dLaborablesXSemana}</p>
                                <p>{datos.FTE.tXOperacionMinutos}</p>
                                <p>{((datos.FTE.rateEmpleado-0.68)/0.022).toFixed(1)}</p>
                            </div> 
                            :""}
                            
                            <div style={{...CSS.content1, justifyContent:"center"}}><p>${datos.salarioPromedio}</p></div>
                            <div style={{...CSS.content2, justifyContent:"center"}}><p>${datos.costoImplementacion}</p></div>
                            <div style={{...CSS.content1, justifyContent:"center"}}><p>${escribir(datos.tabla.mantenimiento)}</p></div>
                            {/* VERMAS 2  */}
                            {verMas2?
                            <div style={{...CSS.verMasContainer,height: 120, textAlign: "center"}}>
                                {
                                    datos.costosExtras.map((item,index)=>{
                                        let key = "CostoExtra"+index;
                                        return(
                                            <p key={key}>{item.precioExtra}</p>
                                        )
                                    })
                                }
                            </div> 
                            :""}
                        </div>
                        {/* TERCERA COLUMNA */}
                        <div className='eliminar'>
                            <div className='cabecera-2' style={CSS.header}><h2 style={CSS.headerFont}>INFO.</h2></div>
                            <div style={{...CSS.content1,justifyContent:"center"}}></div>
                            <div style={{...CSS.content2,justifyContent:"center"}}><p onClick={cerrarVerMas1()} style={CSS.verMas}>Ver más <FontAwesomeIcon style={{transform: `rotate(${rotateVM1}deg)`}} className="animarFaAngle" icon={faAngleDown}/></p></div>
                            
                            {/* VERMAS 1 box */}
                            {verMas1?
                            <div style={{height: 120}}>
                            </div> 
                            :""}

                            <div style={{...CSS.content1,justifyContent:"center"}}></div>
                            <div style={{...CSS.content2,justifyContent:"center"}}></div>
                            <div style={{...CSS.content1,justifyContent:"center"}}><p onClick={cerrarVerMas2()} style={CSS.verMas}>Ver más <FontAwesomeIcon style={{transform: `rotate(${rotateVM2}deg)`}} className="animarFaAngle" icon={faAngleDown}/></p></div>
                            {/* VERMAS 2 box */}
                            {verMas2?
                            <div style={{height: 120}}>
                            </div> 
                            :""}
                        </div>
                    </div>
                    <button style={CSS.btnCerrar} onClick={setTrigger}>Cerrar</button>
                </div>
            </div>: ""
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
        return {
            datos: state.user.procesos[ownProps.index]
        }
} 
export default connect(mapStateToProps)(VentanaDatosBrutos);