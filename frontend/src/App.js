import Header from './Components/Layouts/Header';
import './App.css';
import Footer from './Components/Layouts/Footer';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetails from './Components/product/ProductDetails';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
