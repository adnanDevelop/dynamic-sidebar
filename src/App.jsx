import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import UserCheck from "./UserCheck";
import UserList from "./UserList";

const App = () => {
  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar />
        <div className="flex items-center justify-center flex-1 w-full h-screen text-3xl font-semibold text-white bg-sky-blue">
          <Routes>
            <Route path="/" element={<h1>Dashboard Placeholder</h1>} />
            <Route path="/user-check" element={<UserCheck />} />
            <Route path="/user-list" element={<UserList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
