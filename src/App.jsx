import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import CommonForm from "./components/CommonForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<CommonForm />} />
        {/* <Route path='' element={<Navigate to={"/login"} />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
