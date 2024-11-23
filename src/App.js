import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/home";
import Discover from "./pages/discover/discover";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div className="App">
      <Nav />
      <div id="main-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
