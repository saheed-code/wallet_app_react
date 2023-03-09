import "./App.css";
import Login from "./container/pages/auth/components/Login";
import { SignUp } from "./container/pages/auth/components/SignUp";
import { OTPinput } from "./container/pages/auth/components/OTPinput";
import { CompleteReg } from "./container/pages/auth/components/CompleteReg";
import { CompleteReg2 } from "./container/pages/auth/components/CompleteReg2";
import { ForgetPassword } from "./container/pages/auth/components/ForgetPassword";
import { ForgetPassword3 } from "./container/pages/auth/components/ForgetPassword3";
import { NewPassword } from "./container/pages/auth/components/NewPassword";
import LoginClass from "./container/pages/auth/components/LoginClass";
import LoginComponent from "./container/pages/auth/components/LoginComponent";
import { ReducerComponent } from "./container/pages/auth/components/JavaScriptReducer";
import { ReducerComponentTwo } from "./container/pages/auth/components/ReducerComponentTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./container/pages/auth/components/Cards"
import { ChakraProvider } from '@chakra-ui/react'
// import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ReducerComponentTwo />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="otpinput" element={<OTPinput />} />
          <Route path="completereg" element={<CompleteReg />} />
          <Route path="completereg2" element={<CompleteReg2 />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="forgetpassword3" element={<ForgetPassword3 />} />
          <Route path="newpassword" element={<NewPassword />} />
          <Route path="loginclass" element={<LoginClass />} />
          <Route path="loginComponent" element={<LoginComponent />} />
          <Route path="reducerComponent" element={<ReducerComponent />} />
          <Route path="cards" element={<Cards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
