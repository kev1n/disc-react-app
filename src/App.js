import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/home";
import Discover from "./pages/discover/discover";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* email only auth */}
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["email"]}
        />
      </div>
    );
  } else {
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
