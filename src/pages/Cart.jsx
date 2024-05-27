import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 h-[100px]">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="h-[400px] md:w-1/3 mt-4 md:mt-0 md:ml-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <h2 className="text-xl text-green-600 font-bold">Your Cart</h2>
              <h3 className="text-3xl  text-green-600 font-bold">Summary</h3>
              <p className="mt-2">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold">
                Total Amount: ${totalAmount}
              </p>
              <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-gray-500">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-gray-500">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
