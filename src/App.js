import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import Navigation from "./components/Navigation";
import TableProad from "./components/TableProad";

const App = () => {
  return (
    <div className="root">
      <BrowserRouter>
        <TopNavigation />
        <Navigation />
        <TableProad />
      </BrowserRouter>
    </div>
  );
};

export default App;
