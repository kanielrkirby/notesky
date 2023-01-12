import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext, UserContextI } from './utils/User'

function App() {
	const { user, signInWithGoogle, signOut, editProfile } = useContext(UserContext) as UserContextI
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<>home</>} />
				<Route path='/notes' element={<>notes</>} />
				<Route path='/notes/:id' element={<>note with id</>} />
				<Route path='/login' element={<>login</>} />
				<Route path='/signup' element={<>signup</>} />
				<Route path='/settings' element={<>settings</>} />
				<Route path='*' element={<>404</>} />
			</Routes>
		</div>
	)
}

export default App
