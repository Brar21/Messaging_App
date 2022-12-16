import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="666294354868-hibgkt7uaio395o3lliukjj4q3pvln20.apps.googleusercontent.com">
        
        <App />
</GoogleOAuthProvider>

  
)
