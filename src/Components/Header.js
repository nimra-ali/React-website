import React from "react";
// import Api from "./Api";
// import { useNavigate } from 'react-router-dom'


function Header() {
  // const navigate = useNavigate()
return (
      
        <nav>
          { <div className="Imgdiv"> 
          <h2 className="hd-1">Hey there ! login your account to see this website...</h2>
            {/* <img className="img" src="image.webp" alt="logo"/> */}
            </div>}
            <div className="btn">
            
    
           
          {/* <button onClick={()=>navigate('/Loginpage') }  className="btn-1">Log in</button> */}
           {/* <button className="btn-2">Sign in</button> */}
          </div>
          </nav>  
);
  }
  export default Header;