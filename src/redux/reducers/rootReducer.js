import { combineReducers} from 'redux';

import loginReducer from './loginReducer';
import dashboardReducer from "./dashboardReducer";



const appReducer = combineReducers({
   loginReducer,
   dashboardReducer
});

const rootReducer = (state, action) => {
   if (action.type === 'LOG_USEROUT_REQ') {
      state = undefined
   }

   return appReducer (state, action)
}


export default rootReducer