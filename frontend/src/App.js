import './styles/appStyles.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Offers from './pages/Offers';
import Products from './pages/Products';
import BreadCrumbs from './components/BreadCrumbs';


function App() {
  return (
    <div className="App">
      <Header />
      <BreadCrumbs />
      {/* <img src={logo} width="100" /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
