import React,{Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalculator} from "@fortawesome/free-solid-svg-icons"

const CSS={
    cabecera:{

    },
    formula:{

    },
    formulaEscribir:{

    },
    leyenda:{

    },
    boton:{

    }
}

export default class VentanaFormula extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                {/* cabecera */}
                <div style={CSS.cabecera}>
                    <FontAwesomeIcon icon={faCalculator}/>
                    <h2>¿Cómo se calcula?</h2>
                </div>
                {/* formula */}
                <div style={CSS.formula}>
                    <h3><span style={CSS.formulaEscribir}>{}</span></h3>
                </div>
                {/* Leyenda */}
                {/* botón */}
            </div>
        )
    }
} 