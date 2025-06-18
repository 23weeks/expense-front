import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token')

  if (!token) {
    // 로그인 안 된 상태 → 로그인 페이지로 이동
    return <Navigate to="/login" replace />
  }

  // 로그인 되어 있으면 원래의 컴포넌트 렌더링
  return children
}

export default PrivateRoute
