// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full bg-white border-[20px] border-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat font-poppins before:content-[''] before:absolute before:inset-0 before:bg-black/50">
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="app" element={<AppLayout />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
