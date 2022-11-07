
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
                rateEmpleado: 0,
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

export const modificarFTE = (index,values) =>({
    type: MODIFICARINPUTS,
    payload: {index,values}
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
                            rateEmpleado: 0,
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
                        objectToReturn.costoImplementacion=action.payload.costoImplementacion
                        objectToReturn.salarioPromedio=action.payload.salarioPromedio
                        objectToReturn.nPersonas=action.payload.nPersonas
                        return objectToReturn
                    }
                    return value
                })
            }
        default:
            return state
    }

}
