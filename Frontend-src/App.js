// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Dashboad/context/CartContext';
import Homepage from './components/Homepage';
import Login from './components/ELogin';
import Register from './components/ERegister';
import ProductPage from './components/Product';
import Cart from './components/Dashboad/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import HelpPage from './components/Dashboad/Help';
import Protector from './components/Dashboad/Protector';
import { UserProvider } from './components/Dashboad/UserContext';
import { useState } from 'react';
import ProfilePage from './components/Profile';
import StudioPage from './components/Studio';
function App() {
  const [user, setUser] = useState(null);

 

  return (
    <CartProvider>

      <BrowserRouter>
      <UserProvider value={{user,setUser}}>

        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/studio' element={<StudioPage />}/>
          <Route exact path='/home' element={
            <Protector user={user}>
            <Homepage />
            </Protector>
            } />

          <Route exact path='/reg' element={<Register />} />
          <Route exact path='/prod' element={
             <Protector user={user}>
            <ProductPage />
            </Protector>

            } />
          <Route exact path='/cart' element={
            <Protector user={user}>
            <Cart />
            </ Protector>
            } />
          <Route exact path='/help' element={
            <Protector user={user}>
            <HelpPage/>
            </Protector>
            } />
          <Route exact path='/prof' element={
            <Protector user={user}>
            
            <ProfilePage/>
            </Protector>
            } />
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
