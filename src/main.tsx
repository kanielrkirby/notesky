import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { UserProvider } from './utils/User'
import './samples/node-api'
import './index.css'
import '@picocss/pico'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<UserProvider>
				<App />
			</UserProvider>
		</Router>
	</React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
