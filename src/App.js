import logo from './logo.svg';
import './App.css';
import RadioComponent from './Components/RadioComponent';
import PageLayout from './Components/PageLayout';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='pageClass'>
        <PageLayout/>
      </div>
    </Provider>
  );
}

export default App;
