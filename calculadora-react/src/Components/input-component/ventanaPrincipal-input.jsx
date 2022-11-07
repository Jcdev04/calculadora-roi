 import React ,{ Component } from "react";

export default class ventanaPrincipalComponent extends Component{
    render(){
        const {input,meta,title,...props} = this.props
        return(
            <div>
                {title && <span>{title}</span>}
                <input {...input} {...props} />
                {meta.submitFailed && meta.error && <span>{meta.error}</span>
                }
            </div>
        )
    }
}
