import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Note from "./pages/Note";
// import Create from "./pages/Create";
// import Navbar from "./components/Navbar";

function Wrapper() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="note/:id" element={<Note />} /> */}
        {/* <Route path="create" element={<Create />} /> */}
      </Route>
    </Routes>
  );
}

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   setGreetMsg(await invoke("greet", { name }));
// }
