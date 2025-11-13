import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout, BaseLayout } from "@/layout";
import { Dashboard, Home, Login, Register } from "@/pages";
import "@/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
