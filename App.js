import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Arrivals from './Component/Bars/Arrivals';
import Shop from './Component/Bars/Shop';
import Store from './Component/Bars/Store';
import Insta from './Component/Bars/Insta';
import Infl from './Component/Bars/Infl';
import Collct1 from './Component/Bars/Collct1';
import Collct2 from './Component/Bars/Collct2';
import './App.css';


const App = () => {
  return (
    
      <div>

          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/arrival" element={<Arrivals/>} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/collct1" element={< Collct1/>} />
              <Route path="/collct2" element={<Collct2/>} />
              <Route path="/insta" element={<Insta/>} />
              <Route path="/store" element={<Store/>} />
              <Route path="/infl" element={<Infl/>} />


            </Routes>
          </div>
      </div>
  )
}

export default App