import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import MainModal from './Components/Modals/MainModal'
import ModalFinal from './Components/Modals/ModalFinal';
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
        <ModalFinal />
      </ContextProvider>
    </div>
  );
}

export default App;
