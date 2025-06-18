import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Expenses from '../pages/Expenses'
import AddExpense from '../pages/AddExpense'
import MyPage from '../pages/MyPage'
import Settings from '../pages/Settings'
import Stats from '../pages/Stats'
import PrivateRoute from './PrivateRoute'

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
            <Route
                path="/expenses/add"
                element={
                    <PrivateRoute>
                        <AddExpense />
                    </PrivateRoute>
                }
            />
            <Route
                path="/stats"
                element={
                    <PrivateRoute>
                        <Stats />
                    </PrivateRoute>
                }
            />
            <Route
                path="/mypage"
                element={
                    <PrivateRoute>
                        <MyPage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/settings"
                element={
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                }
            />
            {/* 잘못된 경로로 들어왔을 때 홈으로 리다이렉트 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRouter