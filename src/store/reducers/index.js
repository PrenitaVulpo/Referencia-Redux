//função do redux que combina todos os reducers em um só objeto
import {combineReducers} from 'redux'

import course from './course'

export default combineReducers({
  course,
})

//agora, o estado fica parecendo algo mais ou menos assim:
/*
{
  course: {
    activeLesson: '',
    activeModules: '',
    modules: []
  }
}
*/