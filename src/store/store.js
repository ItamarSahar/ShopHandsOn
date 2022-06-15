import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { storeReducer } from './reducers/storeReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
	storeModule: storeReducer,
})

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)

window.myStore = store
