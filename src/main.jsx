import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignUp from './auth/sign-up.jsx'
import SignIn from './auth/sign-in.jsx'
import Onboarding from './auth/welcome.jsx'
import Layout from './auth/_layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Onboarding /> */}
    <SignIn/>
    {/* <SignUp/> */}
  </StrictMode>,
)
