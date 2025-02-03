"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after 5 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-700">You will be redirected to the homepage shortly.</p>
    </div>
  );
};

export default SuccessPage;