import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Expenses from '../pages/Expenses'
import { isLoggedIn } from '../api/auth'

function PrivateRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/login" />
} 

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/expenses"
                element={
                    <PrivateRoute>
                        <Expenses />
                    </PrivateRoute>
                }
            />
            {/* 잘못된 경로로 들어왔을 때 홈으로 리다이렉트 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRouter