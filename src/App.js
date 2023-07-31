import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Detailpage from './Components/Detailpage'
import Loginpage from './Pages/Loginpage';
import Cart from './Pages/Cart';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // }
  return (
    <div>
{/* <Cart/> */}
      <Routes>
        
        <Route path='/home' Component={Home} exact />
        <Route path='/' Component={Loginpage} exact />
        <Route path="/Api/:id" Component={Detailpage} exact />
        <Route path="/card" Component={Cart}/>

      </Routes>
</div>
  );
}
export default App;