import React, {Component} from "react";
import '../Styles/ventana-costos-extras.css';
import { connect} from "react-redux"
import { modificarCostosExtras } from "../Reducers/inputs";

const CSS = {
    boxCosto: {
        padding: "12px 20px",
        borderRadius: 15,
        margin: "30px 0",
        boxShadow: "rgba(0, 0, 0, 0.21) 0px 5px 15px 0px",
        backgroundColor: "white"
    },
    inputCosto:{
        height: 25,
        fontSize: 16,
        border: "none",
        boxShadow: "rgba(0,0,0, 0.35) 0px 1px 4px",
        color: "black"
    },
    btnAgregarExtra:{
        backgroundColor: "#05BE50",
        color: "white",
        width: "60px",
        height: "60px",
        border: "none",
        fontSize: 40,
        borderRadius: "50%",
        cursor: "pointer",
        position: "absolute",
        bottom: -30,        
    },
    btnAgregar:{
        backgroundColor: "#FC4D19",
        color: "white",
        width: "156px",
        height: "40px",
        border: "none",
        fontSize: 18,
        cursor: "pointer"
    },
}

class VentanaCostosExtras extends Component{
    constructor(props){
        super(props)
        this.state ={
            costosExtras:[
                    {
                        nombreExtra: "",
                        precioExtra: 0,
                    }
                ]
        }
    }


    render(){
        
        const agregarCosto=()=>{
            this.setState((state)=>({
                costosExtras:[
                    ...state.costosExtras,
                    {
                        nombreCosto: "",
                        precio: "",
                    }
                ]
            }))
        }

        const handleChangeNombre = (newValue,i)=>{
            const elemento = [...costosExtras]
            const procesoComunValor = elemento[i]
            procesoComunValor.nombreExtra = newValue
            this.setState(()=>({
                costosExtras: elemento
            })
            )
        }

        const handleChangePrecio = (newValue,i) => {
            const elemento = [...costosExtras]
            const procesoComunValor = elemento[i]
            procesoComunValor.precioExtra = parseInt(newValue)
            this.setState(()=>({
                costosExtras: elemento
            })
            )
        }


        const {openVentanaCostosExtras, index, modificarCostosExtras} = this.props
        const {costosExtras} = this.state

        return(
            <>
                <button onClick={()=>{
                    modificarCostosExtras(index,costosExtras);
                    openVentanaCostosExtras()
                }
                }>Regresar</button>
                <div>
                    {costosExtras.map((data, i)=>{
                        return(
                            <div style={CSS.boxCosto} className="boxCosto" key={i}>
                                <input onChange={(e)=> handleChangeNombre(e.target.value,i)} value={data.nombreExtra} placeholder="Click aquí para escribir" className="nombreCostoExtra" style={{width:"100%", boxSizing: "border-box"}} type="text"/>
                                <input onChange={(e)=> handleChangePrecio(e.target.value,i)} value={data.precioExtra} placeholder="0.00" style={{...CSS.inputCosto ,width:"100%", boxSizing: "border-box"}} type="number"/>
                            </div>
                        )
                    })}
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <button style={CSS.btnAgregarExtra} onClick={()=>agregarCosto()} className="btnAgregarExtra">+</button>
                    </div>
                    
                </div>
            </>
        )
    }
}

//COLOCAR MAP STATE TO PROPS PARA INICIAR

const mapDispatchToProps = dispatch =>({
    modificarCostosExtras: (index,valores) => dispatch(modificarCostosExtras(index,valores))
})

export default connect(null,mapDispatchToProps)(VentanaCostosExtras);