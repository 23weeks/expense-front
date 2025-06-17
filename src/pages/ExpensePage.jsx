import { useEffect, useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function ExpensePage() {
    const [expenses, setExpenses] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const res = await api.get('/expenses')
                setExpenses(res.data)
            } catch (error) {
                console.error('Error fetching expenses:', error)
                alert('인증되지 않았거나 오류 발생')
                navigate('/login')
            }
        }

        fetchExpenses()
    }, [])

    return (
        <div style={styles.container}>
            <h2>📋 나의 지출 목록</h2>
            {expenses.length === 0 ? (
                <p>지출 내역이 없습니다.</p>
            ) : (
                <ul>
                    {expenses.map(exp => (
                        <li key={exp.id}>
                            💸 {exp.amount}원 - {exp.category} ({exp.date})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

const styles = {
    container: {
        maxwidth: '600px',
        margin: '50px auto',
        fontfamily: 'Arial, sans-serif',
    }
}