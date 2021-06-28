import './App.css';
import HotelRateTable from './components/HotelRateTable/HotelRateTable';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Sidebar></Sidebar>
      <HotelRateTable></HotelRateTable>
    </div>
  );
}

export default App;
