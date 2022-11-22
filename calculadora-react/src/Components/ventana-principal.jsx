import {reduxForm,Field, initialize} from 'redux-form'
import { connect } from "react-redux"
import React,{ Component } from "react";
import '../Styles/ventana-principal.css';
import ventanaPrincipalComponent from './input-component/ventanaPrincipal-input';
import {reset} from 'redux-form';
import VentanaFTE from './ventana-fte'

const validate= values=> {
    const errors= {};
    if(!values.nPersonas){
        errors.nPersonas = "Campo Obligatorio"
    }
    if(!values.salarioPromedio){
        errors.salarioPromedio = "Campo Obligatorio"
    }
    if(!values.costoImplementacion){
        errors.costoImplementacion = "Campo Obligatorio"
    }
    if(!values.FTE){
        errors.FTE = "Campo Obligatorio"
    }
    if(!values.nOperaciones){
        errors.nOperaciones = "Campo Obligatorio"
    }
    if(!values.nHorasXDia){
        errors.nHorasXDia = "Campo Obligatorio"
    }
    if(!values.diasLaborables){
        errors.diasLaborables = "Campo Obligatorio"
    }
    if(!values.tiempoXOperacion){
        errors.tiempoXOperacion = "Campo Obligatorio"
    }
    if(!values.rendimiento){
        errors.rendimiento = "Campo Obligatorio"
    }
    return errors
}

const CSS = {
    principalBox:{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.2)",
        width: "100%",
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    formCostosROI: {
        maxWidth: 350,
        margin: "0 10px",
        width: "100%",
        position: "relative",
        padding: "20px 30px",
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    inputs:{
        display : "flex",
        width: "100%",
        boxSizing: "border-box",
        paddingLeft: 7
    },
    inputStyle:{
        height: 25,
        border: "1px solid rgba(0, 0, 0, 0.25)",
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)",
    },
    btnGeneral:{
      cursor: "pointer",  
      padding: "5px 13px",
      borderRadius: 15,
      border: "none"
    },
    btnCerrar:{
        position: "absolute",
        cursor: "pointer",  
        right: 6,
        top: 6,
    },
    btnRegistrar:{
        height: 27,
    },
    btnAgregarCostos:{
    },
    btnCalcular:{
    },
    porcentajeBox:{
        display:"grid",
        gridTemplateColumns:"80px 1fr", 
        gridGap: 8
    },
    porcentajeFTE:{
        backgroundColor: "#7A64FF", 
        color:"white", 
        width:"100%",
        boxSizing: "border-box", 
        paddingLeft: 7, 
        margin: 0, 
        padding: "0px 5px",
        textAlign: "center"
    },
    inputBoxes : {
        margin: "20px 0",
    }
}

class VentanaPrincipal extends Component{
    constructor(props){
        super(props);
        this.state = {
            popUp: false,
        }
    }
    
    render(){
        const botonCerrar = () =>{
            setTrigger(false)
            dispatch(reset('v_principal'))
        }
        const abrirFTE = () =>{
            this.setState(state=>({
                popUp: !state.popUp
            }))
        }

        const {trigger
                ,setTrigger
                ,handleSubmit
                ,dispatch
                ,pristine
                ,submitting
                ,FTEvalue
            } = this.props
        const {popUp} = this.state
        /* Inicializar valores */
        const valoresIniciales = {
            nPersonas: FTEvalue.nPersonas
        }
        
        const ventanaPrincipal = ()=>{
            /* EXTRAYENDO los valores de la clase FTE */
            let nOpDiarias = FTEvalue.FTE.nOpDiarias,
            hTrabajadasXDia =  FTEvalue.FTE.hTrabajadasXDia,
            dLaborablesXSemana = FTEvalue.FTE.dLaborablesXSemana,
            tXOperacionMinutos = FTEvalue.FTE.tXOperacionMinutos,
            rateEmpleado = FTEvalue.FTE.rateEmpleado
            
            rateEmpleado = (rateEmpleado*0.022)+0.68
            
            let FTEresultado = (nOpDiarias*dLaborablesXSemana*4*tXOperacionMinutos)/(hTrabajadasXDia*dLaborablesXSemana*60*4*rateEmpleado)
            FTEresultado = (FTEresultado*100).toFixed(2)
            
            if(isNaN(FTEresultado)){
                FTEresultado = 0
            }
            return (
                <div style={CSS.formCostosROI}>
                    {/* BOTONCERRAR */}
                    <div style={{marginBottom: 10}}>
                        <button style={CSS.btnCerrar} type="button" onClick={()=>botonCerrar()}>X</button>
                    </div>
                    {/* NPERSONAS */}
                    <div style={CSS.inputBoxes}>
                    <Field style={{...CSS.inputs, ...CSS.inputStyle}} name="nPersonas" type="number" component={ventanaPrincipalComponent} placeholder="0"
                    title="¿Cuántas personas están actualmente trabajando en esta actividad?" />
                    </div>
                    {/* FTE */}
                    <div style={{...CSS.inputBoxes, backgroundColor: "#5F0DFC", borderRadius: 15, padding: "10px 15px 15px 15px"}}>
                        <p style={{marginBottom: 8, marginTop:0 , color: "white"}} htmlFor="">
                        Porcentaje de tiempo invertido diariamente por las personas
                        </p>
                        <div style={CSS.porcentajeBox}>
                            <button onClick={()=>abrirFTE()} style={{...CSS.btnRegistrar,...CSS.btnGeneral}} type="button">Registrar</button>
                            {/* Este input se cambia automáticamente */}
                            <div style={CSS.porcentajeFTE} name="FTE" type="number">
                                {/* MOSTRANDO el resultado de calcular el FTE */}
                                <h1 style={{fontSize: 22, margin: 0}}>{FTEresultado}%</h1>
                                </div>
                        </div>
                    </div>
                    {/* SALARIOPROMEDIO */}
                    <div style={CSS.inputBoxes}>
                    <Field style={{...CSS.inputs, ...CSS.inputStyle}} name="salarioPromedio" type="number" component={ventanaPrincipalComponent} placeholder="0" title="Salario promedio mensual de las personas que realizan esta operación"/>
                    <div>
                    </div>
                    </div>
                    {/* COSTOIMPLEMENTACION */}
                    <div style={CSS.inputBoxes}>
                        <Field style={{...CSS.inputs,...CSS.inputStyle}} name="costoImplementacion" type="number" component={ventanaPrincipalComponent} placeholder="0" title="Estimación del costo por la implementación del robot"/>
                    </div>
                    {/* AGREGARCOSTOS */}
                    <div style={CSS.inputBoxes}>
                        <button style={{...CSS.btnAgregarCostos,...CSS.btnGeneral}} type="button">Agregar costos extras</button>
                    </div>
                    {/* BOTONCALCULAR */}
                    <div>
                        <button style={{...CSS.btnCalcular,...CSS.btnGeneral}} disabled={pristine || submitting}>Calcular</button>
                    </div>
                </div>
            )
        }
        const ventanaFTE = ()=>{
            return(
                <div style={{...CSS.formCostosROI,width:280, padding:"20px 40px"}}>
                    <VentanaFTE Pristine={pristine} Submitting={submitting} estilos={CSS} openVentanaFTE={abrirFTE}/>
                </div>
            )
        }

        const ventanaCostosExtras = () =>{
            
        }

        /* FUNCION PRINCIPAL */
        if(trigger){
            return(
            <form style={CSS.principalBox} onSubmit={handleSubmit}>
                {popUp ? ventanaFTE():ventanaPrincipal()}
            </form>)}
        }
}
const mapStateToProps = (state) => ({
    initialValues: {
        ...state,
        rendimiento: "5.5"
    }
})
export default connect(mapStateToProps)(reduxForm({
    form: 'v_principal',
    validate,  
})(VentanaPrincipal))