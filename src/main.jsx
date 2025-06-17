import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ExpensePage from './pages/ExpensePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/expenses" element={<ExpensePage />} />
    </Routes>
  </BrowserRouter>
)