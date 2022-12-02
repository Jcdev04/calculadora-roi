 import React ,{ Component } from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ventanaPrincipalComponent extends Component{
    render(){

        const CSS = {
            title:{
                marginBottom: 8,
            },
            error:{
                color: "#D60718",
                fontSize: 10,
                marginTop: -5 
            },
        }
        const {input,value,meta,icono, iconoEstilo,title,...props} = this.props
        const changeBorder =()=>{
            props.style = {...props.style, borderStyle:"solid", borderWidth:1, borderColor: "#D60718"}
        }
        const errores = ()=>{
            if(meta.touched && meta.error){
                return (<span style={CSS.error}>{meta.error}</span>)
            }
        }

        return(

            <div>
                {meta.touched && meta.error && changeBorder()}
                {title && <p style={CSS.title}><FontAwesomeIcon style={iconoEstilo} icon={icono}/>{title}</p>}
                <input style={CSS.errorBorder} {...value} {...input} {...props} />
                {errores()}
            </div>
        )
    }
}
