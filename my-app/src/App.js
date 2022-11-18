import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config"
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";

function App() {
  const [isAuth, setIsAuth] = useState(false); // is the person logged in?

  const signUserOut = () => {
    signOut(auth).then (() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    });
  };
 
  return (
    <Router> 
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/timeline"> Timeline </Link>
        {/* only show create post and log out button if person is logged in */}
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;