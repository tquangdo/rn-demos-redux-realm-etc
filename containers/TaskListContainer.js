import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';

const mapStateToProps = (arg_state) => {
    return {
        propsTasks: arg_state.taskReducers ? arg_state.taskReducers : []
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;