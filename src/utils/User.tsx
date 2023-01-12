import { GoogleAuthProvider, signInWithRedirect, signOut as signOutFirebase } from '@firebase/auth'
import { doc, DocumentData, getDoc, setDoc } from '@firebase/firestore'
import { createContext, useEffect, useState } from 'react'
import { db, auth } from './firebase'

const UserContext = createContext(null) as React.Context<UserContextI | null>

interface User extends DocumentData {
	bio?: string
	createdAt?: Date
	updatedAt?: Date
}

interface UserContextI {
	user: User | undefined
	signInWithGoogle: () => Promise<void>
	signOut: () => Promise<void>
	editProfile: (newDetails: { displayName?: string; email?: string; photoURL?: string; bio?: string }) => Promise<void>
}

const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState() as [User | undefined, (user: User | undefined) => void]

	useEffect(() => {
		auth.onAuthStateChanged(async (authUser) => {
			if (authUser) {
				try {
					const userDetails = await getFirestoreUser(authUser.uid, { canCreate: true })
					setUser({ ...authUser, ...userDetails })
					console.log(user)
				} catch (err) {
					console.log(err)
				}
			} else {
				setUser(undefined)
			}
		})
	}, [])

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider()
		try {
			await signInWithRedirect(auth, provider)
		} catch (err) {
			console.log(err)
		}
	}

	async function signOut() {
		try {
			await signOutFirebase(auth)
		} catch (err) {
			console.log(err)
		}
	}

	async function editProfile(newDetails: { displayName?: string; email?: string; photoURL?: string; bio?: string }) {
		if (!user) return
		try {
			await updateFirestoreUser(user.uid, newDetails)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<UserContext.Provider value={{ user, signInWithGoogle, signOut, editProfile }}>{children}</UserContext.Provider>
	)
}

async function createFirestoreUser(uid: string, details?: { bio?: string }) {
	if ((await getDoc(doc(db, 'users', uid))).exists()) throw new Error('User already exists')

	const userInfo = {
		bio: details?.bio || null,
		createdAt: new Date(),
		updatedAt: new Date(),
	}

	await setDoc(doc(db, 'users', uid), userInfo)
	return userInfo
}

async function getFirestoreUser(uid: string, options: { canCreate?: boolean }) {
	let userDoc = await getDoc(doc(db, 'users', uid))
	console.log(userDoc.data())
	if (!userDoc.exists()) {
		if (options?.canCreate) {
			return await createFirestoreUser(uid)
		} else throw new Error('User does not exist')
	} else return userDoc.data()
}

async function updateFirestoreUser(
	uid: string,
	newDetails: { displayName?: string; email?: string; photoURL?: string; bio?: string },
) {
	const userDoc = await getDoc(doc(db, 'users', uid))
	if (!userDoc.exists()) throw new Error('User does not exist')
	const oldDetails = userDoc.data()

	const details = {
		...oldDetails,
		...newDetails,
		updatedAt: new Date(),
	}

	await setDoc(doc(db, 'users', uid), details)
	return details
}

export { UserContext, UserProvider }
export type { UserContextI, User }
