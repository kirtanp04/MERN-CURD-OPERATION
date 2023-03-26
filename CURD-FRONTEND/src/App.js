import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Add-User/Create";
import Read from "./components/Display-Data/Read";
import Update from "./components/Updata-Data/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create/>}></Route>
          <Route path="/view" element={<Read/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
