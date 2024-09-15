import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Diary } from './components/Diary/Diary';
import { Profile } from './components/Profile/Profile';

import './App.css'
function App() {
	return (
		<div className='main'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/diary' element={<Diary />} />
			</Routes>
		</div>
	)
}

export default App
