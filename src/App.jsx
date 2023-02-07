
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminAddCategory from './pages/admin/AdminAddCategory'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminUsers from './pages/admin/AdminUsers'
import HomePage from './pages/user/HomePage'
import LoginPage from './pages/user/LoginPage'
import OtpPage from './pages/user/OtpPage'
import SignupPage from './pages/user/SignupPage'

function App() {
  return (
  <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/otp' element={<OtpPage/>}/>
          <Route path='/adminLogin' element={<AdminLoginPage/>}/>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
          <Route path= '/adminUsers' element={<AdminUsers/>}/>
          <Route path='/addCategory' element={<AdminAddCategory/>}/>
        </Routes>
      </Router>
    <Toaster/>
  </>
  )
}

export default App
