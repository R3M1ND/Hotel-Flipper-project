import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from "./pages/Cart";
import Aboutpage from "./pages/About";

import DetailPage from './pages/DetailPage'
import QAPage from './pages/QAPage'
import PaymentPage from './pages/PaymentPage'
import PaymentPageCart from './pages/PaymentPageCart'
import FeedbackPage from './pages/FeedbackPage'

import ApplyforWork from './pages/ApplyforWork';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import ForgetPassword from './pages/ForgetPassword';
import EditProfilePage from './pages/EditProfilePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<Aboutpage />} />

          <Route path='/detailpage' element={<DetailPage />} />
          <Route path='/qapage' element={<QAPage />} />
          <Route path='/paymentpage' element={<PaymentPage />} />
          <Route path='/paymentpagecart' element={<PaymentPageCart />} />
          <Route path='/feedbackpage' element={<FeedbackPage />} />

          <Route path='/LoginPage' element={ <LoginPage/>}/>
          <Route path='/SignupPage' element={ <SignupPage/>}/>
          <Route path='/ApplyforWork' element={ <ApplyforWork/>}/>
          <Route path='/ProfilePage' element={<ProfilePage/>}/>
          <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
          <Route path='/EditProfilePage' element={<EditProfilePage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
