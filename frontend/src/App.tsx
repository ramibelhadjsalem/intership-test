import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from './components/NavBar';
import HomePage from './pages/Home';
import NotFoundPage from './pages/Not-Found';
import AddFormPage from './pages/AddForm';
import FormPass from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid d-flex flex-column'>
        <Navbar />
        <div className='container-fluid p-0 flex-grow-1'>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/edit'
              element={<AddFormPage />}
            />
            <Route
              path='/edit/:id'
              element={<AddFormPage />}
            />
            <Route
              path='/form/:id'
              element={<FormPass />}
            />
            <Route
              path='/*'
              element={<NotFoundPage />}
            />
          </Routes>

        </div>
      <div/>
      </div>
    </BrowserRouter>
  );
}

export default App;


