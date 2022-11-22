import React,{ Component } from "react";
import { reduxForm,Field } from "redux-form";
import ventanaPrincipalComponent from "./input-component/ventanaPrincipal-input";

const CSS = {
    indicadoresSlider:{
        marginTop: -45, 
        fontSize: 12, 
        width: "100%",
        zIndex: 1
    },
    valorSlider:{
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
        fontSize: 15,
        width: 60,
        borderRadius: 15,
        margin: 'auto',        
        textAlign: 'center',
        color: "#FC4D19",
        fontWeight: "bold",
        marginTop: 50,
        padding: "1px 0px",
    },
    btnListo:{
        marginTop: 10,
        width: 180,
        height: 37,
        fontSize: 17,
        border: "none",
        backgroundColor: "#FC4D19",
        color: "white", 
        cursor: "pointer" 
    }
}

export default class VentanaFTE extends Component{
    constructor(props){
        super(props)
        this.state = {
            sliderValue: 5.5
        }
    }
    
    render(){
        const {openVentanaFTE, estilos} = this.props
        const {sliderValue} = this.state
        
        const changeValue= (newValue)=>{
            this.setState({
                sliderValue: newValue
            })
        }
        return(
            <div>
                <button type="button" onClick={openVentanaFTE}>Regresar</button>
                <div style={estilos.inputBoxes}>
                    <Field style={{...estilos.inputs, ...estilos.inputStyle}} name="nOperaciones" type="number" component={ventanaPrincipalComponent} placeholder="0"
                title="N° de operaciones diarias por persona"/>
                </div>
                <div style={estilos.inputBoxes}>
                    <Field style={{...estilos.inputs, ...estilos.inputStyle}} name="nHorasXDia" type="number" component={ventanaPrincipalComponent} placeholder="0"
                title="Horas trabajadas por día"/>
                </div>
                <div style={estilos.inputBoxes}>
                    <Field style={{...estilos.inputs, ...estilos.inputStyle}} name="diasLaborables" type="number" component={ventanaPrincipalComponent} placeholder="0"
                title="Días laborables por semana "/>
                </div>
                <div style={estilos.inputBoxes}>
                    <Field style={{...estilos.inputs, ...estilos.inputStyle}} name="tiempoXOperacion" type="number" component={ventanaPrincipalComponent} placeholder="0"
                title="Tiempo por operación en minutos"/>
                </div>
                <div style={{...estilos.inputBoxes}}>
                    <Field onChange={e=>changeValue(e.target.value)} step="0.5" min="1" max="10" style={{width:"100%", zIndex: 2}} name="rendimiento" type="range" component={ventanaPrincipalComponent}title="¿Cómo evalúas el desempeño del encargado en ese proceso?"/>
                    <div style={CSS.indicadoresSlider}>
                        <p style={{float:"left"}}>1</p>
                        <p style={{float:"right"}}>10</p>
                    </div>
                    <div style={CSS.valorSlider}>
                        <p style={{margin: 0}}>{sliderValue}</p>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <button style={CSS.btnListo}>Listo!</button>
                </div>
            </div>
        )
    }
} 