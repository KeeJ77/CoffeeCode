// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./welcome";
import SignUp from "./sign-up";
import SignIn from "./sign-in";

const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default Layout;



