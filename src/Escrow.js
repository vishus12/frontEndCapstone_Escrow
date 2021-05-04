import { render, screen } from '@testing-library/react';
import React, {useState} from "react";
import  "./Escrow.css"  
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";


export const Escrow = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("escrowUser") !== null);
  const setAuthUser = (user) => {
    sessionStorage.setItem("escrowUser", JSON.stringify(user.id))
    setIsAuthenticated(sessionStorage.getItem("escrowUser") !== null)
  }

  const clearUser = () => {
    sessionStorage.clear()
    setIsAuthenticated(sessionStorage.getItem("escrowUser") !== null)
  }
  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
      <ApplicationViews isAuthenticated={isAuthenticated} clearUser={clearUser} />
    </>
  )
}


