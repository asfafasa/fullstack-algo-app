import React from "react";
import { Outlet } from "react-router-dom";
import Button from "./Components/Button/Button";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { io } from "socket.io-client";
const socket = io("http://localhost:5050");
const App = () => {
  function sendSocketIO() {
    console.log("running");
    socket.emit("token", JSON.stringify(localStorage.getItem("")));
  }

  socket.on("message_1", (msg) => {
    // revert to classic upgrade
    console.log(msg);
  });

  return (
    <>
      <Navbar />
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center w-screen flex-1 shadow-lg border-2 rounded-b-2xl ">
        <Home />
      </div>
    </>
  );
};

export default App;
