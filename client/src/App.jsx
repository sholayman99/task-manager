import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import CanceledPage from "./pages/CanceledPage.jsx";
import CompletedPage from "./pages/CompletedPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import RegiPage from "./pages/RegiPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";
import Page404 from "./pages/Page-404.jsx";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader.jsx";
import ForgetPassPage from "./pages/ForgetPassPage.jsx";
import {Toaster} from "react-hot-toast";
import axios from "axios";
import {getToken} from "./helpers/SessionHelper.js";
import SendOtpPage from "./pages/Password Recover/SendOtpPage.jsx";
import VerifyOtpPage from "./pages/Password Recover/VerifyOtpPage.jsx";
import CreatePassPage from "./pages/Password Recover/CreatePassPage.jsx";


const App = () => {

  axios.defaults.baseURL = "http://localhost:5000/api/v1"

  if(getToken()){
      return (
          <>
              <BrowserRouter>
                  <Routes>
                      <Route path={"/"} element={<DashboardPage/> } />
                      <Route path={"/create"} element={<CreatePage /> } />
                      <Route path={"/canceled"} element={<CanceledPage/> } />
                      <Route path={"/completed"} element={<CompletedPage/> } />
                      <Route path={"/new"} element={<NewPage/> } />
                      <Route path={"/profile"} element={<ProfilePage/> } />
                      <Route path={"/progress"} element={<ProgressPage/> } />
                      <Route path={"*"} element={<Page404/> } />
                  </Routes>
              </BrowserRouter>
              <Toaster position={"bottom-center"} />
              <FullScreenLoader />
          </>
      );
  }
  else{
      return (
          <>
              <BrowserRouter>
                  <Routes>
                      <Route path={"/"} element={< Navigate to={"/login"} replace />} />
                      <Route path={"/registration"} element={<RegiPage />} />
                      <Route path={"/login"} element={<LoginPage />} />
                      <Route path={"/send-otp"} element={<SendOtpPage />} />
                      <Route path={"/verify-otp"} element={<VerifyOtpPage />} />
                      <Route path={"/create-password"} element={<CreatePassPage />} />
                      <Route path={"*"} element={<Page404 />} />
                  </Routes>
              </BrowserRouter>
              <Toaster position={"bottom-center"} />
              <FullScreenLoader />
          </>
      );
  }
};

export default App;