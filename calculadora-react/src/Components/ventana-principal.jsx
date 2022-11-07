import {reduxForm,Field, submit} from 'redux-form'
import React,{ Component } from "react";
import '../Styles/ventana-principal.css';
import { connect } from 'react-redux';
import ventanaPrincipalComponent from './input-component/ventanaPrincipal-input';

const validate= values=> {
    const errors= {};
    if(!values.nProcesos){
        errors.nProcesos = "Campo Obligatorio"
    }
    if(!values.salarioPromedio){
        errors.salarioPromedio = "Campo Obligatorio"
    }
    if(!values.costoImplementacion){
        errors.costoImplementacion = "Campo Obligatorio"
    }
    return errors
}
class VentanaPrincipal extends Component{
    render(){
        
        const {trigger,setTrigger, handleSubmit} = this.props
        return (trigger) ? (
            <form className="formCostosROI" onSubmit={handleSubmit}>
                <button onClick={e=>{setTrigger(false); }}>Cerrar</button>
                {/* nPersonas */}
                <Field name="nPersonas" type="number" component={ventanaPrincipalComponent} placeholder="0"
                title="¿Cuántas personas están actualmente trabajando en esta actividad?"/>
                <label htmlFor="">
                    Porcentaje de tiempo invertido en este proceso por las personas diariamente
                    <div style={{display:"flex"}}>
                        <button className="btnRegistrar" style={{width:"30%",margin:"10px 0px"}}>Registrar</button>
                        {/* Este input se cambia automáticamente */}
                        <input type="number" style={{width:"70%",margin:"10px"}}/>
                    </div>
                </label>
                {/* salarioPromedio */}
                <Field name="salarioPromedio" type="number" component={ventanaPrincipalComponent} placeholder="0" title="¿Cuál es el salario promedio mensual de las personas que realizan esta operación?"/>
                {/* costoImplementación */}
                <Field name="costoImplementacion" type="number" component={ventanaPrincipalComponent} placeholder="0" title="Estimación del costo por la implementación del robot"/>
                <button>Agregar costos extras</button>
                <button>Calcular</button>
            </form>
        ) : "";
    }
}

export default reduxForm({
    form: 'v_principal',
    validate,
})(VentanaPrincipal)