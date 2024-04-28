import React from 'react';
import FullPageComponent from './components/full-page-component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullPageComponent />}>
          <Route path="*" element={<FullPageComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
