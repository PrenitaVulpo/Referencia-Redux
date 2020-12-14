//ação que modificará o estado global da aplicação
export function toggleLesson(module, lesson){
  return{
    //Chave obrigatória que indica qual ação está sendo executada
    //precisa ser única
    type: 'TOGGLE_LESSON',
    //variáveis que serão adicionadas ao novo estado
    module,
    lesson
  }
}