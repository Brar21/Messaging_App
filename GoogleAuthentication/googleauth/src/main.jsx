import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="put you client ID here">
        
        <App />
</GoogleOAuthProvider>

  
)
