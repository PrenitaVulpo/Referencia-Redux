import React from 'react';

//high-order component que passa informações para o componente atual
import {connect} from 'react-redux'

import * as courseActions from '../../store/actions'

//recebe o modules que é a lista de aulas
//recebe o dispatch, que todos os componentes que usam o connect têm acesso no redux
//o dispatch dispara a action desejada
function Sidebar({modules, toggleLesson}) {
  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>Mudar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}


//o connect pode receber dois parâmetros: 
//mapStateToProps e mapDispatchToProps
const mapStateToProps = state =>({
  modules: state.course.modules
})

const mapDispatchToProps = dispatch =>({
  toggleLesson: (module,lesson) => dispatch(courseActions.toggleLesson(module.title,lesson.title))
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);