import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import DetailNote from "./pages/DetailNote";

const App = () => {
  return (
    <div data-theme="coffee" className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<DetailNote />} />
      </Routes>
    </div>
  );
};

export default App;
