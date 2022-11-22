 import React ,{ Component } from "react";

export default class ventanaPrincipalComponent extends Component{
    render(){

        const CSS = {
            title:{
                marginBottom: 8,
            }
        }
        const {input,value,meta,title,...props} = this.props
        return(
            <div>
                {title && <p style={CSS.title}>{title}</p>}
                <input {...value} {...input} {...props} />
                {meta.touched && meta.error && <span>{meta.error}</span>
                }
            </div>
        )
    }
}
