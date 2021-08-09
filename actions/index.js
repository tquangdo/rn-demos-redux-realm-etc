import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';
let newTaskId = 0;

//Action: "add new Task"
export const _addNewTask = (arg_input_taskname) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: arg_input_taskname
    }
}
//Action: "toggle 1 task to completed / incompleted"
export const _toggleTask = (arg_taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: arg_taskId
    }
}