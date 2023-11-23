import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Arrivals from './Component/Bars/Arrivals';

const Mainrouter = () => {
  return (
    <div>
         <Routes>
            <Route path="/arrival" element={<Arrivals />} />
        </Routes>
    </div>
  )
}

export default Mainrouter;