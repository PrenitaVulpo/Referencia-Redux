import React from 'react'
import Sidebar from './components/Sidebar'
import Video from './components/Video'

//utiliza contextAPI para passar o estado para os componentes-filho
import {Provider} from 'react-redux'
//store criada anteriormente
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Sidebar/>
        <Video/>
      </Provider>
    </div>
  );
}

export default App;
