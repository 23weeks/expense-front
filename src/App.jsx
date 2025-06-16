import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💰 Expense Tracker</h1>
      <p style={styles.subtitle}>간단한 JWT 기반 가계부 프로젝트입니다.</p>
      
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate('/signup')}>회원가입</button>
        <button style={styles.button} onClick={() => navigate('/login')}>로그인</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '10%',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  }
}

export default App
