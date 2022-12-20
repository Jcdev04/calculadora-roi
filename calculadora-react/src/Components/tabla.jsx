import React, { Component } from "react"
import '../Styles/tabla.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
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
        padding: 10
    },
    tabla: {
        maxWidth: 750,
        width: "100%",
        position: "relative",
        padding: "20px 30px",
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "-20px -20px 60px #FFDDD3, 20px 20px 60px #dfdfdf",
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
    containerBotones:{
        maxWidth: 750,
        zIndex: 2,
        width: "100%",
        display:"flex",
        justifyContent: "end",
    }
}
export default class Tabla extends Component {
    render(){
        const {valores, trigger2, setTrigger2,i} = this.props
        //Extrayendo los valores del objeto guardado en redux
        let nOpDiarias = valores.FTE.nOpDiarias,
        hTrabajadasXDia =  valores.FTE.hTrabajadasXDia,
        dLaborablesXSemana = valores.FTE.dLaborablesXSemana,
        tXOperacionMinutos = valores.FTE.tXOperacionMinutos,
        rateEmpleado = valores.FTE.rateEmpleado
        
        //Calculando el FTE
        let FTEresultado = (nOpDiarias*tXOperacionMinutos)/(hTrabajadasXDia*60*rateEmpleado)
        FTEresultado = (FTEresultado).toFixed(2)
        
        let mantenimiento = 0
        for (const element of valores.costosExtras) {
            mantenimiento+=element.precioExtra
        }        
        //Llenando matriz que irá en la tabla
        const tabla = {
                //Fila 1
                fila1_Y1Y5: 0,
                fila1_Suma: 0,
                //Fila 2
                fila2_Y1Y5: 0,
                //Fila 3
                fila3_Y1: 0,
                fila3_Y2Y5: 0,
                fila3_Suma: 0,
                //Fila 4
                fila4_Y1: 0,
                fila4_Y2Y5: 0,
                fila4_Suma: 0,
                //Fila 5
                fila5_Y1:0,
                fila5_Y2:0,
                fila5_Y3:0,
                fila5_Y4:0,
                fila5_Y5:0,
        }
        // Fila 1
        tabla.fila1_Y1Y5 = valores.nPersonas*FTEresultado*(valores.salarioPromedio*12);
        tabla.fila1_Suma = tabla.fila1_Y1Y5*5;
        // Fila 2
        tabla.fila2_Y1Y5 = valores.nPersonas*(hTrabajadasXDia*dLaborablesXSemana)*52;
        // Fila 3
        tabla.fila3_Suma= tabla.fila3_Y1+(mantenimiento*4);
        tabla.fila3_Y1 = valores.costoImplementacion+mantenimiento;
        tabla.fila3_Y2Y5 = mantenimiento;
        // Fila 4
        tabla.fila4_Y1 = tabla.fila3_Y1-tabla.fila1_Y1Y5;
        tabla.fila4_Y2Y5= tabla.fila1_Y1Y5-mantenimiento;
        tabla.fila4_Suma= tabla.fila4_Y1+(tabla.fila4_Y2Y5*4);
        // Fila 5
        tabla.fila5_Y1=(tabla.fila4_Y1*100)/tabla.fila3_Y1;
        tabla.fila5_Y2=(((tabla.fila1_Y1Y5-tabla.fila3_Y1) + tabla.fila4_Y1)/(tabla.fila3_Y1 + (tabla.fila3_Y1))*100);
        tabla.fila5_Y3=(((tabla.fila1_Y1Y5-tabla.fila3_Y1)*2 + tabla.fila4_Y1)/(tabla.fila3_Y1 + (tabla.fila3_Y1*2))*100);
        tabla.fila5_Y4=(((tabla.fila1_Y1Y5-tabla.fila3_Y1)*3+ tabla.fila4_Y1)/(tabla.fila3_Y1 + (tabla.fila3_Y1*3))*100);
        tabla.fila5_Y5=(((tabla.fila1_Y1Y5-tabla.fila3_Y1)*4+ tabla.fila4_Y1)/(tabla.fila3_Y1 + (tabla.fila3_Y1*4))*100);
        let notANumber = true
        if(isNaN(tabla.fila1_Y1Y5) || isNaN(tabla.fila2_Y1Y5) || isNaN(tabla.fila5_Y1)){
            notANumber = false
        }

        function escribir(valor){
            return notANumber ? `$${valor.toFixed()}`: "-" 
        }
        function escribirHoras(valor){
            return notANumber ? `${valor.toFixed()}`: "-" 
        }

        
        if(trigger2){ 
            return(
            <div style={CSS.principalBox}>  
            <div style={CSS.containerBotones}>
                <button style={CSS.close} onClick={()=>setTrigger2(false)}>
                <FontAwesomeIcon style={{marginRight:5}} icon={faCircleXmark} />
                Cerrar</button>  
            </div>
            <table style={{...CSS.tabla,margin:10}} className="table">
                <thead>
                    <th>Ítems</th>
                    <th>1 AÑO</th>
                    <th>2 AÑOS</th>
                    <th>3 AÑOS</th>
                    <th>4 AÑOS</th>
                    <th>5 AÑOS</th>
                    <th>5 AÑOS EN TOTAL</th>
                </thead>
                <tbody>
                    <tr className="row2">
                        <td data-label="Items"><i className="fa-solid fa-money-bill"></i>Costos anuales por las horas dedicadas a realizar este trabajo</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila1_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila1_Suma)}</td>
                    </tr>
                    <tr className="row3">
                        <td data-label="Items"><i className="fa-regular fa-hourglass-half"></i>Horas dedicadas a esta actividad en cada año por todos los trabajadores</td>
                        <td className="content" data-label="1 AÑO">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="2 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribirHoras(tabla.fila2_Y1Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">-</td>
                    </tr>
                    <tr>
                        <td data-label="Items"><i className="fa-solid fa-chart-line"></i> Costo total anual por implementación del bot (1 año) mantenimiento (+5 años)</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila3_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila3_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila3_Suma)}</td>
                    </tr>
                    <tr className="net-roi">
                        <td data-label="Items"><i className="fa-solid fa-robot"></i> Net ROI</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila4_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila4_Y2Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">{escribir(tabla.fila4_Suma)}</td>
                    </tr>
                    <tr className="roi-acumulado">
                        <td data-label="Items"><i className="fa-brands fa-android"></i> ROI acumulado anual</td>
                        <td className="content" data-label="1 AÑO">{escribir(tabla.fila5_Y1)}</td>
                        <td className="content" data-label="2 AÑOS">{escribir(tabla.fila5_Y2)}</td>
                        <td className="content" data-label="3 AÑOS">{escribir(tabla.fila5_Y3)}</td>
                        <td className="content" data-label="4 AÑOS">{escribir(tabla.fila5_Y4)}</td>
                        <td className="content" data-label="5 AÑOS">{escribir(tabla.fila5_Y5)}</td>
                        <td className="content" data-label="5 AÑOS EN TOTAL">-</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )}else {
           return ""
        };
    }
}