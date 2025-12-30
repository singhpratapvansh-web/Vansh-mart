export default function ProductCard({ product }) {
    return (
        <div className="bg-white- shadow-lg rounded-lg p-4 hover:scale-105 transition">
            <img 
               src={product.image} 
               alt={product.Mobile} 
               className="h-40 w-full object-cover rounded" 
               />
            <h3 className="mt-2 font-simibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
             Add to Cart
            </button>
            <img 
               src={product.image} 
               alt={product.Television} 
               className="h-40 w-full object-cover rounded" 
               />
            <h3 className="mt-2 font-simibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
             Add to Cart
            </button>
            <img 
               src={product.image} 
               alt={product.Mobile} 
               className="h-40 w-full object-cover rounded" 
               />
            <h3 className="mt-2 font-simibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
             Add to Cart
            </button>
            <img 
               src={product.image} 
               alt={product.Mobile} 
               className="h-40 w-full object-cover rounded" 
               />
            <h3 className="mt-2 font-simibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
             Add to Cart
            </button>
            <img 
               src={product.image} 
               alt={product.Mobile} 
               className="h-40 w-full object-cover rounded" 
               />
            <h3 className="mt-2 font-simibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
             Add to Cart
            </button>
        </div>
    );
}