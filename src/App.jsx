
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import ProtectedRouteAdmin from './ProtectedRouteAdmin'
import ForgetPassword from './Components/user/auth/ForgetPassword'
import AddCategotyPage from './pages/admin/AddCategotyPage'
import AddProductPage from './pages/admin/AddProductPage'
import AdminAddCategory from './pages/admin/AdminAddCategory'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminUsers from './pages/admin/AdminUsers'
import CalenderPage from './pages/admin/CalenderPage'
import ProductListPage from './pages/admin/ProductListPage'
import UserProfilePage from './pages/admin/UserProfilePage'
import BookingPage from './pages/user/BookingPage'
import CategoryPage from './pages/user/CategoryPage'
import CollectionPage from './pages/user/CollectionPage'
import HomePage from './pages/user/HomePage'
import LoginPage from './pages/user/LoginPage'
import OrdersPage from './pages/user/OrdersPage'
import OtpPage from './pages/user/OtpPage'
import ProfilePage from './pages/user/ProfilePage'
import SignupPage from './pages/user/SignupPage'
import AdminProductPage from './pages/admin/AdminProductPage'
import AllOrdersPage from './pages/admin/AllOrdersPage'
import ErrorPage from './pages/ErrorPage'
import SingleOrderPage from './pages/admin/SingleOrderPage'
import ContactPage from './pages/user/ContactPage'

function App() {
  return (
  <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/otp' element={<OtpPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/userCategory' element={<ProtectedRoutes> <CategoryPage/></ProtectedRoutes>}/>
          <Route path='/Booking' element= {<ProtectedRoutes> <BookingPage/></ProtectedRoutes>}/>
          <Route path='/Orders' element= {<ProtectedRoutes><OrdersPage/></ProtectedRoutes>}/>
          <Route path='/AllItems' element={<ProtectedRoutes><CollectionPage/></ProtectedRoutes>}/>
          <Route path='/profile' element={<ProtectedRoutes><ProfilePage/></ProtectedRoutes>}/>
          <Route path='/forgetPassword' element= {<ForgetPassword/>}/>
          <Route path='/contact' element={<ContactPage/>}/>

        
          <Route path='/admin/adminLogin' element={<AdminLoginPage/>}/>
          <Route path='/admin/userProfile' element={<ProtectedRouteAdmin><UserProfilePage/></ProtectedRouteAdmin>}/>
          <Route path='/admin/admincalender' element={<ProtectedRouteAdmin><CalenderPage/></ProtectedRouteAdmin> }/>
          <Route path= '/admin/adminUsers' element={<ProtectedRouteAdmin><AdminUsers/></ProtectedRouteAdmin>}/>
          <Route path='/admin/addProduct' element= {<ProtectedRouteAdmin><AddProductPage/></ProtectedRouteAdmin>}/>
          <Route path='/admin/dashboard' element={<ProtectedRouteAdmin><AdminDashboard/></ProtectedRouteAdmin>}/>
          <Route path='/admin/addCategory' element={<ProtectedRouteAdmin><AdminAddCategory/></ProtectedRouteAdmin>}/>
          <Route path='/admin/newCategory' element={<ProtectedRouteAdmin><AddCategotyPage/></ProtectedRouteAdmin>}/>
          <Route path= '/admin/adminProducts' element={<ProtectedRouteAdmin><ProductListPage/></ProtectedRouteAdmin>}/>
          <Route path='/admin/adminSingleProduct' element = {<ProtectedRouteAdmin><AdminProductPage/></ProtectedRouteAdmin>}/>
          <Route path='/admin/allOrders' element={<ProtectedRouteAdmin><AllOrdersPage/></ProtectedRouteAdmin>}/>
          <Route path='/admin/singleOrder' element={<ProtectedRouteAdmin><SingleOrderPage/></ProtectedRouteAdmin>}/>
        </Routes>
      </Router>
    <Toaster/>
  </>
  )
}

export default App
