import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function LeftBar() {
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) return null

  return (
    <aside style={styles.sidebar}>
      <h3 style={styles.title}>메뉴</h3>
      <ul style={styles.menu}>
        <li>
          <Link to="/expenses" style={styles.link}>지출 내역</Link>
        </li>
        <li>
          <Link to="/expenses/add" style={styles.link}>지출 등록</Link>
        </li>
        <li>
          <Link to="/stats" style={styles.link}>지출 통계</Link>
        </li>
        <li>
          <Link to="/mypage" style={styles.link}>마이페이지</Link>
        </li>
        <li>
          <Link to="/settings" style={styles.link}>설정</Link>
        </li>
      </ul>
    </aside>
  )
}

const styles = {
  sidebar: {
    width: '200px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRight: '1px solid #ddd',
    minHeight: 'calc(100vh - 120px)', // header + footer 제외
  },
  title: {
    marginBottom: '15px',
    fontSize: '1.2rem',
    color: '#333',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    display: 'block',
    padding: '8px 0',
    textDecoration: 'none',
    color: '#007bff',
  },
}
