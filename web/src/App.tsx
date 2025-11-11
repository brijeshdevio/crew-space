import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "@/layout";
import { Home, Register } from "@/pages";
import "@/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
