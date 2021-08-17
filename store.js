import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    form: formReducer
});
const storeJS = createStore(rootReducer);
export default storeJS;