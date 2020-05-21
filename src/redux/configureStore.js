import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(()=>{
    // console.log('')
    console.log("store state updated",store.getState())
})

export default store