import { combineReducers} from 'redux';

import loginReducer from './loginReducer';
import dashboardReducer from "./dashboardReducer";


const rootReducer = combineReducers({
   loginReducer,
   dashboardReducer
});

export default rootReducer