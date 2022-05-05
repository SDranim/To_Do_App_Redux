import {ADDTODO,DELETETODO} from "./Actiontype"

const initialeState={
    taskList:[
        { id: Math.random(), task: "task1" },
        { id: Math.random(), task: "task2" },
        { id: Math.random(), task: "task3" },
                ]
}

const Reducer=(state=initialeState, action)=>{
    switch (action.type) {
        case ADDTODO:
          return {...state,taskList:[...state.taskList,action.payload]}
    case DELETETODO:
        return {...state,taskList: state.taskList.filter((el)=>el.id!==action.payload)}
        default:
            return state
    }
}

export default Reducer