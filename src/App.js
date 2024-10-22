import './App.css';
import HomePage from './Pages/UserPages/HomePage/HomePage';
import Reservation from './Pages/Reservation/Reservation';
import Navbar from './Components/UserComponents/Navbar/Navbar'
import Footer from './Components/UserComponents/Footer/Footer';
import ScrollToTop from './Components/UserComponents/ScrollToTop/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticlePage from './Pages/UserPages/ArticlePage/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/article/:id" element={<ArticlePage/>} />
        </Routes>
        <Footer />
        {/* <ScrollToTop/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
