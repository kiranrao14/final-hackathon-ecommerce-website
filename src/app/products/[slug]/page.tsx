
'use client';
import TopHeader from '../../Component/Header';
import { Header } from '../../Component/Header';
import { useCart } from '../../context/CartContext'; 

import Footer from '@/app/Component/Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import { use } from 'react'; 

const ProductDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params); // Unwrap the params promise

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart(); 

  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product with slug:", slug); 
        
        const query = `*[_type == "products" && slug.current == "${slug}"][0]{
          _id,
          title,
          price,
          priceWithoutDiscount,
          badge,
          "imageUrl": image.asset->url,
          category->{
            _id,
            title,
            slug {
              current
            }
          },
          slug {
            current
          },
          description,
          inventory,
          tags[] 
        }`;

        const result = await client.fetch(query);
        console.log("Fetched product:", result); 
        
        if (result) {
          setProduct(result); 
        } else {
          setError(true); 
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(true);
      } finally {
        setLoading(false); 
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-4 border-t-transparent border-blue-500 w-12 h-12 mx-auto rounded-full"></div>

      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-red-500">Product not found. Please try again.</p>
      </div>
    );
  }


  return (
    <>
    
    <TopHeader/>
    <Header/>
    <div className="mt-10  mb-12 container mx-auto px-6 py-10 bg-[#F0F2F3] border-b-4 border-gray-400 shadow-lg rounded-lg">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="flex justify-center items-center">
          <div className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
          </div>
        </div>

        
        <div className="flex flex-col justify-between space-y-6">
          <h1 className="text-4xl font-extrabold text-blue-900">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>

          <div className="flex items-center space-x-4">
            <p className="text-3xl font-semibold text-gray-800">
              ${product.price}{' '}
              {product.priceWithoutDiscount && (
                <span className="line-through ml-2 text-gray-500">${product.priceWithoutDiscount}</span>
              )}
            </p>
            {product.badge && (
              <span className="bg-yellow-500 text-white text-sm px-4 py-2 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          
          {product.category && (
            <p className="text-sm text-gray-500 font-bold">
              Category: <span className="font-bold text-gray-800">{product.category.title}</span>
            </p>
          )}

    
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <p className="text-sm text-gray-500 font-bold">Tags:</p>
              {product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-300 px-3 py-1 rounded-full text-gray-700 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

      
          <div className="space-y-4">
           
           
 <button
        onClick={() => {
          console.log('Add to Cart clicked');
          addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity: 1,
          });
        }}
        className="bg-[#029FAE]  text-white px-4 py-2 rounded mt-6"
      >
        Add to Cart
      </button>
            <button
              onClick={() => router.back()}
              className="w-full bg-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-400 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetail;
