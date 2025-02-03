"use client";
import { Header } from "../Component/Header";
import TopHeader from "../Component/Header";
import Footer from "../Component/Footer";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useMemo } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    addToCart,
  }: {
    cart: CartItem[];
    removeFromCart: (id: string, removeAll?: boolean) => void;
    addToCart: (item: CartItem) => void;
  } = useCart();

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "Your order has been successfully processed.",
          icon: "success",
        });
        router.push("/checkout");
      }
    });
  };

  const handleRemove = (id: string, removeAll = false) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id, removeAll);
      }
    });
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-300">
        <p className="text-xl font-bold text-gray-800">Your cart is empty!</p>
      </div>
    );
  }

  return (
    <>
      <TopHeader />
      <Header />
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-16 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-extrabold text-center text-[#029FAE] hover:text-[rgb(39,35,67)] mb-12">
          Your Cart
        </h1>

        <div className="space-y-12">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={item.imageUrl || "/fallback-image.png"}
                alt={`Image of ${item.name}`}
                width={150}
                height={150}
                className="rounded-lg border-2 border-gray-300 shadow-md"
              />

              <div className="flex-grow mt-4 sm:mt-0 sm:ml-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="font-bold text-gray-500 mt-2">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center mt-4 gap-6">
                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-all"
                  >
                    +
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all"
                  >
                    -
                  </button>
                </div>
              </div>

              <div className="text-right mt-4 sm:mt-0 sm:ml-6">
                <button
                  onClick={() => handleRemove(item.id, true)}
                  className="text-red-500 underline text-sm hover:text-red-700 transition-all"
                >
                  Remove All
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Total:{" "}
            <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
          </h2>
          <button
            onClick={handleProceed}
            className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all mt-4 sm:mt-0"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
