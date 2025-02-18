const ProductDetailsCard = () => {
    return (
      <div className="p-6  rounded-lg shadow-md  ">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-800">$19</p>
            <p className="text-gray-500">$45</p>
            <p className="text-green-600 font-bold">10% off</p>
          </div>
          <p className="text-green-600 font-bold">In stock</p>
        </div>
  
        <div className="flex items-center mt-6">
          <button className="bg-gray-300 px-2 py-1 rounded">-</button>
          <input
            type="text"
            value="10"
            readOnly
            className="w-12 text-center border border-gray-300 rounded mx-2"
          />
          <button className="bg-gray-300 px-2 py-1 rounded">+</button>
        </div>
  
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add To Cart
        </button>
  
        <ul className="mt-4 space-y-2">
          <li>
            <strong>SKU:</strong> 201902-0057
          </li>
          <li>
            <strong>Pack Size:</strong> 100g
          </li>
          <li>
            <strong>Unit Count:</strong> 200ml
          </li>
          <li>
            <strong>Country:</strong> Japan
          </li>
        </ul>
      </div>
    );
  };
  
  export default ProductDetailsCard;
  