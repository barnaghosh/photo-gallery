import './App.css';
import{BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Main from './component/Main'
import {Store} from './redux/Store'

function App() {
  return (
    <div className="App">
     <Provider store={Store}>
        <BrowserRouter>
            <Main />
          </BrowserRouter>
     </Provider>
      
    </div>
  );
}

export default App;
