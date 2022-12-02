
const initialState = {procesos:[
        {
            procesoComun:false,
            nombreProceso:"",
            nPersonas: 0,
            FTE: {
                nOpDiarias: 0,
                hTrabajadasXDia: 0,
                dLaborablesXSemana:0,
                tXOperacionMinutos: 0,
                rateEmpleado: 5.5
            },
            salarioPromedio: 0,
            costoImplementacion: 0,
            costosExtras:[
                {
                    nombreExtra: "",
                    precioExtra: 0,
                }
            ]   
        }
    ]}


const AGREGARPROCESO = "PROCESO/AGREGARPROCESO";
const ELIMINARPROCESO = "PROCESO/ELIMINARPROCESO";
const MODIFICARPROCESO1 = "PROCESO/MODIFICARPROCESO1";
const MODIFICARCHECK = "PROCESO/MODIFICARCHECK"
const MODIFICARINPUTS = "PROCESO/MODIFICARINPUTS"
const MODIFICARCOSTOSEXTRAS = "PROCESO/MODIFICARCOSTOSEXTRAS"

export const agregarProceso = ()=>({
    type: AGREGARPROCESO,
})
export const eliminarProceso = (index)=>({
    type: ELIMINARPROCESO,
    payload: {index}
})
export const modificarProceso1 = (newValue,index)=>({
    type: MODIFICARPROCESO1,
    payload: {newValue,index},
})
export const modificarCheck = (index)=>({
    type: MODIFICARCHECK,
    payload: {index}
})

export const modificarInputs = (index,valores) =>({
    type: MODIFICARINPUTS,
    payload: {index,valores}
})

export const modificarCostosExtras = (index,valores)=>({
    type: MODIFICARCOSTOSEXTRAS,
    payload: {index, valores}
})

export default function inputs(state = initialState,action){
    switch(action.type){
        case AGREGARPROCESO:
            return {
                ...state,
                procesos: [...state.procesos, 
                    {
                        procesoComun:false,
                        nombreProceso:'',
                        nPersonas: 0,
                        FTE: {
                            nOpDiarias: 0,
                            hTrabajadasXDia: 0,
                            dLaborablesXSemana:0,
                            tXOperacionMinutos: 0,
                            rateEmpleado: 5.5,
                        },
                        salarioPromedio: 0,
                        costoImplementacion: 0,
                        costosExtras:[
                            {
                                nombreExtra: "",
                                precioExtra: 0,
                            }
                        ]   
                    }
                ]
            }
        case ELIMINARPROCESO:
            let newTodo = [...state.procesos];
            newTodo.splice(action.payload.index, 1);
            return{
            ...state,
            procesos: newTodo
            }
        case MODIFICARPROCESO1:
            return{ 
                ...state,
                procesos: state.procesos.map(({...value},i)=>{
                    if(action.payload.index === i){
                        const objectToReturn = value
                        objectToReturn.nombreProceso = action.payload.newValue
                        return objectToReturn
                    }
                    return value
                }) 

            }
        case MODIFICARCHECK:
            return{
                ...state,
                procesos: state.procesos.map(({...value},i)=>{
                    if(action.payload.index === i){
                    const objectToReturn = value
                    objectToReturn.procesoComun = !(value.procesoComun)
                    return objectToReturn 
                    }
                return value})
            }
        case MODIFICARINPUTS:
            return{
                ...state,
                procesos: state.procesos.map(({...value},i)=>{
                    if(action.payload.index===i){
                        const objectToReturn = value

                        objectToReturn.nPersonas=parseInt(action.payload.valores.nPersonas|| "0")
                        const aux = {
                            nOpDiarias: parseInt(action.payload.valores.nOperaciones|| "0"),
                            hTrabajadasXDia: parseInt(action.payload.valores.nHorasXDia || "0"),
                            dLaborablesXSemana: parseInt(action.payload.valores.diasLaborables|| "0"),
                            tXOperacionMinutos: parseInt(action.payload.valores.tiempoXOperacion|| "0"),
                            rateEmpleado : (parseFloat(action.payload.valores.rendimiento)*0.022)+0.68
                        } 
                        objectToReturn.FTE = {...aux}

                        objectToReturn.salarioPromedio=parseInt(action.payload.valores.salarioPromedio|| "0")
                        objectToReturn.costoImplementacion=  parseInt(action.payload.valores.costoImplementacion|| "0")
                        return objectToReturn
                    }
                    return value
                })
            }

        case MODIFICARCOSTOSEXTRAS:
            return{
                ...state,
                procesos: state.procesos.map(({...value},i)=>{
                    if(action.payload.index===i){
                        const objectToReturn = value
                        objectToReturn.costosExtras = action.payload.valores
                        return objectToReturn
                    }
                    return value
                })
            }
        
        default:
            return state
    }

}
