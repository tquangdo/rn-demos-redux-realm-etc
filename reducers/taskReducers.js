import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from '../actions/actionTypes';

const taskReducers = (tasks = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return [
                ...tasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]
        case TOGGLE_ONE_TASK:
            return tasks.map(item_task =>
                (item_task.taskId === action.taskId)
                    ? { ...item_task, completed: !item_task.completed }
                    : item_task
            )

        default:
            return tasks; //state does not change
    }
}

export default taskReducers;