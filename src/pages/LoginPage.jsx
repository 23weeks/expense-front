import { use, useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await api.post('/users/login', { username, password})
            localStorage.setItem('token', res.data.token)
            alert('로그인 성공')
            navigate('/expenses')
        } catch (error) {
            alert('로그인 실패')
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <h2>로그인</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder='아이디' />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='비밀번호' />
            <button type="submit">로그인</button>
        </form>
    )
}