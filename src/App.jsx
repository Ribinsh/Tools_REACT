
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddCategotyPage from './pages/admin/AddCategotyPage'
import AddProductPage from './pages/admin/AddProductPage'
import AdminAddCategory from './pages/admin/AdminAddCategory'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminUsers from './pages/admin/AdminUsers'
import CalenderPage from './pages/admin/CalenderPage'
import BookingPage from './pages/user/BookingPage'
import CollectionPage from './pages/user/CollectionPage'
import HomePage from './pages/user/HomePage'
import LoginPage from './pages/user/LoginPage'
import OrdersPage from './pages/user/OrdersPage'
import OtpPage from './pages/user/OtpPage'
import ProfilePage from './pages/user/ProfilePage'
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
          <Route path='/Booking' element= {<BookingPage/>}/>
          <Route path='/Orders' element= {<OrdersPage/>}/>
          <Route path='/AllItems' element={<CollectionPage/>}/>
          <Route path='/admincalender' element={<CalenderPage/>}/>
          <Route path='/addProduct' element= {<AddProductPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/newCategory' element={<AddCategotyPage/>}/>
        </Routes>
      </Router>
    <Toaster/>
  </>
  )
}

export default App
