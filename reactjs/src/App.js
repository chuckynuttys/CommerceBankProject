import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Entry from "./Components/Entry/Entry";
import Review from "./Components/Review/Review";
import AC from "./Components/ArchivedChanges/AC";
import LS from "./Components/ListScreen/LS";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Entry" element={<Entry />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/AC" element={<AC />} />
        <Route path="/LS" element={<LS />} />
      </Routes>
    </Router>
  );
}

export default App;