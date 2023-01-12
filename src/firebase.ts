import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCbN-N4k7eTt_UcU34DHN-WVvGQYhgntxw',
	authDomain: 'notesky-2afdb.firebaseapp.com',
	projectId: 'notesky-2afdb',
	storageBucket: 'notesky-2afdb.appspot.com',
	messagingSenderId: '194325562415',
	appId: '1:194325562415:web:7222733b1ec9a88d12b2da',
	measurementId: 'G-QELTH5DMJH',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
