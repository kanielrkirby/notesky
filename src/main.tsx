import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './utils/User'
import './samples/node-api'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>
	</React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
