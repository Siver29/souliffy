import logo from './logo.svg';
import './App.css';
import Reservation from './Pages/Reservation/Reservation';
import Navbar from './Components/UserComponents/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Reservation/>
    </div>
  );
}

export default App;
