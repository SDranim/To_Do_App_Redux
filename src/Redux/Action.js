import { ADDTODO, DELETETODO } from "./Actiontype"

export const addtodo=(newtask)=>{
    return{
        type:ADDTODO,
        payload:newtask
    }
}

export const deletetodo=(id)=>{
    return{
        type:DELETETODO,
        payload:id
    }
}