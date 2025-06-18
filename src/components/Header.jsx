import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext' 

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        My Account Book
      </Link>
      <nav>
        {isAuthenticated ? (
          <>
            <Link to="/expenses" style={styles.link}>지출목록</Link>
            <Link to="/mypage" style={styles.link}>마이페이지</Link>
            <button onClick={handleLogout} style={styles.button}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>로그인</Link>
            <Link to="/signup" style={styles.link}>회원가입</Link>
          </>
        )}
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 30px',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    margin: 0,
  },
  link: {
    marginRight: '15px',
    textDecoration: 'none',
    color: '#007bff',
  },
  button: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
}
