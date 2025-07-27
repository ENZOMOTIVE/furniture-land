import Link from 'next/link';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular furniture pieces, loved by customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.sale && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm font-medium rounded">
                      Sale
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                    </div>
                    <div className="text-yellow-400">
                      {'★'.repeat(Math.floor(product.rating))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}