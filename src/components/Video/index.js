import React from 'react'

//high-order component que passa informações para o componente atual
import {connect} from 'react-redux'

const Video = ({activeLesson, activeModule}) => {

  return (
    <div>
      <strong>Módulo {activeModule}</strong>
      <span>Aula {activeLesson}</span>
    </div>
  );

}

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video)