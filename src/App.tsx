import React from 'react';
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import Navigation from './components/Navigation';



function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<ProductPage />}> </ Route>
        <Route path='/about' element={<AboutPage />}></ Route>
      </Routes>
    </>
  )

}

export default App;
