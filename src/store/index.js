//necessário para se criar a store que armazena o estado (inicial e depois de modificado)
import {createStore} from 'redux'

const INITIAL_STATE = {
  activeLesson: '',
  activeModule: '',
  modules: [
    {
      id: 1,
      title: "Capítulo 1",
      lessons: [
        {id: 1, title: "Aula 1"},
        {id: 2, title: "Aula 2"},
      ]
    },
    {
      id: 2,
      title: "Capítulo 2",
      lessons: [
        {id: 3, title: "Aula 3"},
        {id: 4, title: "Aula 4"},
      ]
    },
  ]
}

//função que irá modificar o estado da aplicação
//é chama automaticamente pelo redux em certos momentos
//recebe dois parâmetros: o estado anterior à alteração
//e a ação a ser executada
function reducer(state = INITIAL_STATE, action){
  console.log(action)

  if(action.type === 'TOGGLE_LESSON'){
    return (
      {
        //para copiar o estado anterior
        ...state,
        //sobreposições às variáveis do estado anterior
        activeLesson: action.lesson,
        activeModule: action.module
      }
    )
  }

  return state
}

const store = createStore(reducer)

export default store;