
'use client';
import TopHeader from './Component/Header';
import { Header } from './Component/Header';
import Hero from './Component/Hero';
import Footer from './Component/Footer';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { client } from '../sanity/lib/client';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  price: string;
  priceWithoutDiscount: string;
  badge: string;
  imageUrl: string | null;
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  description: string;
  inventory: number;
  tags: string[];
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"]{
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

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  
  
  return (
    <>
      <TopHeader />
      <Header/>
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 flex justify-center text-[#029FAE]">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 bg-[#F0F2F3]">
              <Link href={`/products/${product.slug?.current || ''}`}>
              
                  <div className="relative w-full h-48 mb-4">
                    {/* Only render image if `imageUrl` is available */}
                    {product.imageUrl && (
                      <Image
                        src={product.imageUrl}
                        alt={product.title || 'Product Image'}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md mb-4 transition-transform transform hover:scale-105"
                      />
                    )}
                  </div>
                  <h2 className="text-xl font-semibold hover:underline">{product.title}</h2>
                
              </Link>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{product.description}</p>
              <p className="text-lg font-semibold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}



