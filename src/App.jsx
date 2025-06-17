import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Expenses from './pages/Expenses';
import { isLoggedIn } from './utils/auth';

export default function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/expenses"
            element={isLoggedIn() ? <Expenses /> : <Login />}
          />
          {/* 예: 마이페이지 구현 시 아래처럼 추가 가능 */}
          {/* <Route path="/mypage" element={<MyPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
