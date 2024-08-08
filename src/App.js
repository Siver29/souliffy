import './App.css';
import HomePage from './Pages/UserPages/HomePage/HomePage';
import Reservation from './Pages/Reservation/Reservation';
import Navbar from './Components/UserComponents/Navbar/Navbar'
import Footer from './Components/UserComponents/Footer/Footer';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
        {/* <Route path="/home" exact element={<HomePage/>} /> */}
          <Route path="/" element={<Reservation />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
