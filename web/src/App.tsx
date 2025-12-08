import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "@/components";
import { Home } from "@/pages";
import "@/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
