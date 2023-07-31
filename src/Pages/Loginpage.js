import React, { useEffect, useState } from 'react'
import '../App.css'
import Header from '../Components/Header'
import {useNavigate} from 'react-router-dom'



function Loginpage() {

const [user, setUser] = useState({ username: '', password: '' });
const navigate = useNavigate()
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));	
	}, [user]);
	// password: "83r5^_"
const handleApi = () => {
		fetch('https://fakestoreapi.com/auth/login', {
			
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: user.username,
				password: user.password,
				
			})
		})
		.then(res => res.json())
		.then(data => console.log(data))
		.then(data => {
          
			if(user){
				console.log(user)
			
				navigate('/home')
			}else{
				alert('token not found')
			}
		})

				
			}
			
			const handleInputChange = (event) => {
				const { name, value } = event.target;
				setUser((prevUser) => ({
				  ...prevUser,
				  [name]: value,
				}));
			  };
			return (
				<div className='container'>
			<div>
				<Header />
			</div>

	<div className='main'>
				<h2 className="title">Log in</h2>
				<h5 className='uname'>Username:</h5>
				<input className='input1' name='username' type="text" onChange={handleInputChange}  value={user.state}
        />
		
				<h5 className='passclass'>Password:</h5>
				<input className='input2' name="password" type="password" onChange={handleInputChange}  value={user.state}
 />

		
			<button className='bttn' onClick={() => {handleApi()}}>log in</button>
				<div className='forgetpass'><a href='/'>forget Password</a></div>
			</div>
    </div>
)
}
export default Loginpage;