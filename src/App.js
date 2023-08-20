import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Screen from './Screen';

function App() {
  return  (
    <Routes>
       <Route path='/*' element={<Screen />} />
    </Routes>
  );
}

export default App;
