import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";
import Homepage from "./Components/Home/home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/userlogin/login";
import Register from "./Components/userlogin/register";
import Profile from "./Components/userlogin/profile";
import ForgotPassword from "./Components/userlogin/forgotpassword";
import ResetPassword from "./Components/userlogin/ResetPassword";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/account" element={<Profile />} />

        <Route path="/password/forgot" element={<ForgotPassword />} />

        <Route path="password/reset/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
