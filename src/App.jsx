import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import LeftBar from './components/LeftBar'
import Footer from './components/Footer'
import PrivateRoute from './routes/PrivateRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Expenses from './pages/Expenses'
import AddExpense from './pages/AddExpense'
import MyPage from './pages/MyPage'
import Settings from './pages/Settings'
import Stats from './pages/Stats'

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <div style={styles.main}>
          <LeftBar />
          <div style={styles.content}>
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
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  main: {
    display: 'flex',
    flex: 1
  },
  content: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto'
  }
}

export default App
