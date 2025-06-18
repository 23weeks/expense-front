import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth'

export default function Home() {
  const navigate = useNavigate()
  const loggedIn = isLoggedIn()

  const handleClick = () => {
    if (loggedIn) {
      navigate('/expenses')
    } else {
      navigate('/login')
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>지출을 똑똑하게 관리하세요 💰</h1>
      <p style={styles.description}>
        간편하게 지출을 기록하고 확인할 수 있는 나만의 가계부 앱입니다.<br />
        로그인 후 지출을 추가하고 통계를 확인해보세요.
      </p>
      <button onClick={handleClick} style={styles.ctaButton}>
        {loggedIn ? '지출 관리하러 가기' : '지금 시작하기'}
      </button>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '60px auto',
    padding: '30px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fafafa',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  description: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  ctaButton: {
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
}
