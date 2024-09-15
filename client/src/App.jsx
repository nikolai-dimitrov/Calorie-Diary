import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import { UserProfile } from './components/UserProfile/UserProfile';

import './App.css'
function App() {
	return (
		<div className='main'>
			<Navbar />
			{/* <UserProfile /> */}
			{/* <Login /> */}
		</div>
	)
}

export default App
