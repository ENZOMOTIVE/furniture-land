'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  sale?: boolean;
  inStock: boolean;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-orange-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <p className="text-orange-600 font-medium">{product.category}</p>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {product.name}
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 mr-2">
              {'★'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-6">
            {product.originalPrice && (
              <span className="text-2xl text-gray-400 line-through mr-3">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.sale && (
              <span className="ml-3 bg-red-500 text-white px-2 py-1 text-sm rounded">
                Sale
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4 font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2 border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button 
              className="btn-primary flex-1 flex items-center justify-center gap-2"
              disabled={!product.inStock}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="btn-secondary p-3">
              <Heart size={20} />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-medium">SKU:</span>
              <span className="text-gray-600">FL-{product.id.toString().padStart(4, '0')}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-medium">Category:</span>
              <span className="text-gray-600">{product.category}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-medium">Shipping:</span>
              <span className="text-gray-600">Free shipping on orders over $500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}