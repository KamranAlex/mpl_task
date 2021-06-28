import './App.css';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='d-flex'>
        <Sidebar></Sidebar>
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
