import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./files/Login/Login";
import Entry from "./files/Entry/Entry";
import Review from "./files/Review/Review";
import AC from "./files/ArchivedChanges/ArchivedChanges";

import ListScreenApp from "./files/ListScreen/ListScreen";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Entry" element={<Entry />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/ArchivedChangesApp" element={<AC />} />
        <Route path="/ListScreenApp" element={<ListScreenApp />} />
      </Routes>
    </Router>
  );
}

export default App;