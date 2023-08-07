import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import axios from 'axios'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
let theme = createTheme()
theme = responsiveFontSizes(theme)
axios.defaults.baseURL = "https://todo-api-wine.vercel.app/"
axios.defaults.headers = { 'Content-Type': 'application/json' }
const root = ReactDOM.createRoot(document.getElementById('root'))

console.log(process.env.REACT_APP_API_URL)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
