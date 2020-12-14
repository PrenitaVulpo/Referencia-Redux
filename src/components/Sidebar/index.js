import React from 'react';

//high-order component que passa informações para o componente atual
import {connect} from 'react-redux'

//ação que modificará o estado global da aplicação
function toggleLesson(module, lesson){
  return{
    //Chave obrigatória que indica qual ação está sendo executada
    //precisa ser única
    type: 'TOGGLE_LESSON',
    //variáveis que serão adicionadas ao novo estado
    module,
    lesson
  }
}

//recebe o modules que é a lista de aulas
//recebe o dispatch, que todos os componentes que usam o connect têm acesso no redux
//o dispatch dispara a action desejada
function Sidebar({modules, dispatch}) {
  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => dispatch(
                  toggleLesson(module.title,lesson.title)
                )}>Mudar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default connect(state => ({modules: state.course.modules}))(Sidebar);