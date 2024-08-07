import './App.css';
import HomePage from './Pages/UserPages/HomePage/HomePage';
import Reservation from './Pages/Reservation/Reservation';
import Navbar from './Components/UserComponents/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <HomePage/>
    <Reservation/>
    </div>
  );
}

export default App;
