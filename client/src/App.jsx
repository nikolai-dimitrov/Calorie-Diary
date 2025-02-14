import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Common/Layout/Layout';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Diary } from './components/Diary/Diary';
import { Profile } from './components/Profile/Profile';
import { CreateProfile } from './components/CreateProfile/CreateProfile';
import { EditProfile } from './components/EditProfile/EditProfile';
import { AuthRequiredRouteGuard } from './components/Common/RouteGuards/AuthRequiredRouteGuard/AuthRequiredRouteGuard';
import { GuestRequiredRouteGuard } from './components/Common/RouteGuards/GuestRequiredRouteGuard/GuestRequiredRouteGuard';
import { ProfileRequiredRouteGuard, NoProfileRequiredRouteGuard } from './components/Common/RouteGuards/ProfileRequiredRouteGuard/ProfileRequiredRouteGuard';


import './App.css';
function App() {
	return (
		<>
			<Navbar />
			<main className='main'>
				<Routes>
					<Route path='/login'
						element={
							<GuestRequiredRouteGuard>
								<Login />
							</GuestRequiredRouteGuard>
						}
					/>
					<Route path='/register'
						element={
							<GuestRequiredRouteGuard>
								<Register />
							</GuestRequiredRouteGuard>
						}
					/>
					<Route path='/logout'
						element={
							<AuthRequiredRouteGuard>
								<Logout />
							</AuthRequiredRouteGuard>
						}
					/>
					<Route
						path='/*'
						element={
							<Layout>
								<Routes>
									<Route path='/' element={<Home />} />
									<Route path='/profile'
										element={
											<AuthRequiredRouteGuard>
												<ProfileRequiredRouteGuard>
													<Profile />
												</ProfileRequiredRouteGuard >
											</AuthRequiredRouteGuard>
										}
									/>
									<Route path='/profile/create'
										element={
											<AuthRequiredRouteGuard>
												<NoProfileRequiredRouteGuard>
													<CreateProfile />
												</NoProfileRequiredRouteGuard>
											</AuthRequiredRouteGuard>
										}
									/>
									<Route path='/profile/edit'
										element={
											<AuthRequiredRouteGuard>
												<ProfileRequiredRouteGuard>
													<EditProfile />
												</ProfileRequiredRouteGuard>
											</AuthRequiredRouteGuard>
										}
									/>
									<Route path='/diary'
										element={
											<AuthRequiredRouteGuard>
												<ProfileRequiredRouteGuard>
													<Diary />
												</ProfileRequiredRouteGuard >
											</AuthRequiredRouteGuard>
										}
									/>
								</Routes>
							</Layout>
						}
					/>
				</Routes>
			</main>
		</>
	)
}

export default App
