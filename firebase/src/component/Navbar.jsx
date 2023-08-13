import React from "react";
import "../styles/components/Navbar.css";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const Navbar = () => {
  const logoutFunc = async () => {
    toast.success("Çıkış işlemi gerçekleştiriyor.");
    await signOut(auth);
    setTimeout(() => { 
      window.location = "/";
    }, 2000);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">FIREBASE</div>
      <div onClick={logoutFunc} className="navbar-right">
        Logout
      </div>
    </div>
  );
};

export default Navbar;
