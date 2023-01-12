import React, { useContext } from 'react'
import { UserContext, UserContextI } from './utils/User'

function App() {
	const { user, signInWithGoogle, signOut, editProfile } = useContext(UserContext) as UserContextI
	return (
		<div className='App'>
			<h2>You are: </h2>
			<p>Name: {user?.displayName}</p>
			<p>ID: {user?.uid}</p>

			<form action=''>
				<button
					onClick={async (e) => {
						e.preventDefault()
						await signInWithGoogle()
					}}
				>
					Sign in with Google
				</button>
				<button
					onClick={async (e) => {
						e.preventDefault()
						await signOut()
					}}
				>
					Sign out
				</button>
			</form>
		</div>
	)
}

export default App
