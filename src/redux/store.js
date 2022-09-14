import {createStore} from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools} from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'

const persistConfig={
    key:"root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer,composeWithDevTools())

const persistor = persistStore(store)


export default store;
export {persistor}