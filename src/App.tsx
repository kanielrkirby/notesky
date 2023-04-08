import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Note from "./pages/Note";
import Navbar from "./components/Header";
import Sidebar from "./components/Sidebar";

function Wrapper() {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="note/:id" element={<Note />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   setGreetMsg(await invoke("greet", { name }));
// }
