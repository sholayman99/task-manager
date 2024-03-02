import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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

const App = () => {
    return (
        <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<DashboardPage/> } />
                  <Route path={"/create"} element={<CreatePage /> } />
                  <Route path={"/canceled"} element={<CanceledPage/> } />
                  <Route path={"/completed"} element={<CompletedPage/> } />
                  <Route path={"/new"} element={<NewPage/> } />
                  <Route path={"/registration"} element={<RegiPage/> } />
                  <Route path={"/login"} element={<LoginPage/> } />
                  <Route path={"/profile"} element={<ProfilePage/> } />
                  <Route path={"/progress"} element={<ProgressPage/> } />
                  <Route path={"/forget-pass"} element={<ForgetPassPage/> } />
                  <Route path={"*"} element={<Page404/> } />
              </Routes>
          </BrowserRouter>
            <Toaster position={"bottom-center"} />
            <FullScreenLoader />
        </>
    );
};

export default App;