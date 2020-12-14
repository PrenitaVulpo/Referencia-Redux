//necessário para se criar a store que armazena o estado (inicial e depois de modificado)
import {createStore} from 'redux'

//import o objeto gerado com todos os reducers combinados
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default store;