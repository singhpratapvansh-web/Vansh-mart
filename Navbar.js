import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style= {{ padding: "10px", background: "#222", color: "#fff" }}>
          <h2 className="text-2x1 font-bold">Vansh Mart</h2>
          <div className="space-x-6">
            <Link to="/"  style={{ margin: "1px", color: "#fff" }}>Home</Link>
            <Link to="/cart"  style={{ margin: "1px", color: "#fff" }}>Cart</Link>
            <Link to="/login" style={{ margin: "1px", color: "#fff" }}>Login</Link>
          </div>
        </nav>
    );
}
