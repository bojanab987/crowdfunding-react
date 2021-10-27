import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper js-page">
        <ContextProvider>
        <Header />
        <Main />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
