import Header from './Components/Layouts/Header';
import './App.css';
import Footer from './Components/Layouts/Footer';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetails from './Components/product/ProductDetails';
import Login from './Components/user/Login';
import Register from './Components/user/Register';
import {loadUser} from './actions/userActions'
import store from './store'




function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
