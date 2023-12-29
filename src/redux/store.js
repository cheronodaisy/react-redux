import { legacy_createStore as createStore} from 'redux'
import reducers from "./reducers/index";

const store = createStore(
    reducers, 
    {}, 
    window.__REDUX_DEVTOOLS_EXENSION__&& window.__REDUX_DEVTOOLS_EXENSION__()
);

export default store;
