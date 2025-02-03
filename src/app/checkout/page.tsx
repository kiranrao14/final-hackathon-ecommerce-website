"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import TopHeader from "../Component/Header";
import { Header } from "../Component/Header";
import Footer from "../Component/Footer";

const Checkout = () => {
  const { cart } = useCart();
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validatePhone = (phone: string) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email || !validateEmail(formValues.email),
      phone: !formValues.phone || !validatePhone(formValues.phone),
      address: !formValues.address || formValues.address.length < 5, // address should be at least 5 characters
      zipCode: !formValues.zipCode,
      city: !formValues.city || formValues.city.length < 3, // city should be at least 3 characters
    };

    setFormErrors(errors);

    // Ensure all fields are valid
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      Swal.fire({
        title: "Order Placed!",
        text: "Your order has been successfully processed.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/success");
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please fill all fields correctly.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <TopHeader />
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b py-4"
              >
                <Image
                  src={item.imageUrl}
                  alt={`Image of ${item.name}, a product in the cart`}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <h3 className="text-lg font-bold mt-4">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <form className="space-y-4">
              {Object.keys(formValues).map((key) => (
                <div key={key} className="relative">
                  <input
                    id={key}
                    type="text"
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={formValues[key as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      formErrors[key as keyof typeof formErrors]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formErrors[key as keyof typeof formErrors] && (
                    <span className="absolute text-red-500 text-sm bottom-[-20px] left-0">
                      {key === "email" && !validateEmail(formValues.email)
                        ? "Invalid email address"
                        : key === "phone" && !validatePhone(formValues.phone)
                          ? "Enter a valid phone number"
                          : key === "address"
                            ? "Address should be at least 5 characters"
                            : key === "city"
                              ? "City should be at least 3 characters"
                              : "Required field"}
                    </span>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
