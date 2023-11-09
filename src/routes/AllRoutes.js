import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Destination } from "../pages/Destination";
import { PageNotFound } from "../pages/PageNotFound";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { ForgetPassword } from "../pages/ForgetPassword";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="destination" element={<Destination />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />

        <Route path="*" element={<PageNotFound statusCode="404" />} />
      </Routes>
    </>
  );
};
