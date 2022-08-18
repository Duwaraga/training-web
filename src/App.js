import React, { useEffect } from "react";
import "./App.css";
import SignIn from "./Components/SignInComponent";
import AddNewCart from "./Components/AddNewCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useState } from "react";

function App() {

  const [token, setToken] = useState("")

  // useEffect(()=>{
  //     setToken(localStorage.getItem("token"))
  // },[])
  return (
    <BrowserRouter>

        {/* <SignIn /> */}

        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/cart" element={<AddNewCart />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
