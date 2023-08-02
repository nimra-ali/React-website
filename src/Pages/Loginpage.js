import React, { useEffect, useState } from 'react'
import '../App.css'
// import Header from '../Components/Header'
import { useNavigate } from 'react-router-dom'




function Loginpage() {
	const [errorMsg , setErrorMsg] = useState("")
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

				if (user) {
					console.log(user)

					navigate('/home')
				} 
			}).catch((err) =>
			setErrorMsg(err.message));


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


			<div className='main'>
				<div class="login-form">
					<h2 className='tittle'>Login</h2>
					<h5 className='uname'>Username:</h5>
					<input className='inputt1' type="text" placeholder="Username" name="username" onChange={handleInputChange} value={user.state} required />
					<h5 className='passclass'>Password:</h5>
					<input className='inputt1' type="password" placeholder="Password" name="password" onChange={handleInputChange} value={user.state} required />
					<br/>
					<b className='styleerror'>{errorMsg}</b>
					<button className='bttn' onClick={() => { handleApi() }}>log in</button>
					<div className='forgetpass'><a href='/'>forget Password</a></div>
				</div>
			</div>
		</div>
	)
}
export default Loginpage;