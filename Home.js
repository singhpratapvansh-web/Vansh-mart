import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(response => setProducts(res.data))
    }, []);

    return (
        <div>
            <h1>Feature Products</h1>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {products.map(p => (
                    <ProductCard key={p._id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default Home;