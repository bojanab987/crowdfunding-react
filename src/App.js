import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import MainModal from './Components/Modals/MainModal'
import { ContextProvider } from './context/Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <div className="page-wrapper js-page">
          <Header />
          <Main />
        </div>
        <MainModal />
      </ContextProvider>
    </div>
  );
}

export default App;
