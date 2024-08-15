import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const Navbar = () => {
  const { mode } = useUserContext();
  //State/var
  const linkList = [
    { to: "/search", lable: "Ingredient Search" },
    { to: "/random", lable: "Random Cocktail" },
  ];
  //func
  const linkListDisplayHandler = () => {
    return linkList.map((linkObject) => {
      return (
        <li key={linkObject.to}>
          <NavLink to={linkObject.to}>{linkObject.lable}</NavLink>
        </li>
      );
    });
  };
  //return
  return (
    <nav
      className="NavBar"
      style={{
        backgroundColor: mode === "light" ? "white" : "black",
        color: mode === "light" ? "black" : "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px"
      }}
    >
      <ul
        className="menu"
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "15px",
          margin: "0",
          padding: "0",
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {linkListDisplayHandler()}
      </ul>{" "}
      {/* ++ Add another page with route and component */}
    </nav>
  );
};
