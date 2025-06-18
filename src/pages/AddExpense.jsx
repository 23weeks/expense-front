import { useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function AddExpense() {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/expenses', { amount, description })
      alert('지출이 등록되었습니다.')
      navigate('/expenses')
    } catch (error) {
      console.error(error)
      alert('등록 실패')
    }
  };

  return (
    <div style={styles.container}>
      <h2>지출 등록</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="number"
          placeholder="금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="지출 내용"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">등록</button>
      </form>
    </div>
  )
}

const styles = {
  container: { maxWidth: '400px', margin: 'auto' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
}
