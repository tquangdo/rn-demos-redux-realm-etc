import AddComponent from '../components/AddComponent';
import { _addNewTask } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        propsOnClickAdd: (arg_input_taskname) => {
            dispatch(_addNewTask(arg_input_taskname));
        }
    };
}

export default connect(null, mapDispatchToProps)(AddComponent);