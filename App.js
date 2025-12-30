import { BrowseRouter, Routes, Route } from "resct-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";;
import Register from "./pages/Register";
import Checkout from "./page/Checkout";

function App() {
    return(
    <BrowserRouter>
       <Navbar />
       <Routes> 
         <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    );
}

export default App;