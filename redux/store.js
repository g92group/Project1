import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from './reducers.js/rootReducer'

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

const dispatch = store.dispatch;
export { dispatch };

export default store;