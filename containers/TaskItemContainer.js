import { connect } from 'react-redux';
import TaskItemComponent from '../components/TaskItemComponent';
import { _toggleTask } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        propsOnToggle: (arg_taskId) => {
            dispatch(_toggleTask(arg_taskId));
        }
    };
}
const TaskItemContainer = connect(null, mapDispatchToProps)(TaskItemComponent);
export default TaskItemContainer;