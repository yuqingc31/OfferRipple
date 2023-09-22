import { Route, Routes } from 'react-router-dom';
import AdminLogin from '../pages/Admin/AdminLogin/AdminLogin';
import LandingPage from '../pages/Home/LandingPage/LandingPage';
import AdminBoard from '../pages/Admin/AdminBoard';
import NewPost from '../pages/Home/NewPost/NewPost';
import PersonalPage from '../pages/Home/PersonalPage/PersonalPage';
import Recharge from '../pages/Home/Recharge/Recharge';
import ResetPassword from '../pages/Home/ResetPassword/ResetPassword';
import PostDetail from '../pages/Home/PostDetail/PostDetail';
import PersonalSetting from '../pages/Home/PersonalSetting/PersonalSetting';
import Login from '../pages/Home/UserLogin/Login';
import Page404 from '../pages/Home/404Page';
import UserTerm from '../pages/Home/UserTerm';
import AboutUs from '../pages/Home/AboutUs';
import ContactUs from '../pages/Home/ContactUs';
import PaymentSuccess from '../pages/Home/PaymentSuccess';
import PaymentCancelled from '../pages/Home/PaymentCancelled';
import UpdatePost from '../pages/Home/UpdatePost/UpdatePost';

export const Routers = () => (
  <Routes>
    <Route path="/login" Component={Login} />
    <Route path="/admin/login" Component={AdminLogin} />
    <Route path="/" Component={LandingPage} />
    <Route path="/users/me/:userid" Component={PersonalPage} />
    <Route path="/admin" Component={AdminBoard} />
    <Route path="/newpost" Component={NewPost} />
    <Route path="/recharge" Component={Recharge} />
    <Route path="/reset-password" Component={ResetPassword} />
    <Route path="/*" Component={LandingPage} />
    <Route path="/postdetail/:postId" Component={PostDetail} />
    <Route path="/me/profile-setting" Component={PersonalSetting} />
    <Route path="/404" Component={Page404} />
    <Route path="/userterms" Component={UserTerm} />
    <Route path="/aboutus" Component={AboutUs} />
    <Route path="/contactus" Component={ContactUs} />
    <Route path="/payment_success" Component={PaymentSuccess} />
    <Route path="/payment_cancelled" Component={PaymentCancelled} />
    <Route path="/updatepost/:postId" Component={UpdatePost} />
  </Routes>
);
