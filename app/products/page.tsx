import ProductGrid from '@/components/ProductGrid';
import ProductFilter from '@/components/ProductFilter';

export default function ProductsPage() {
  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">Discover our complete collection of premium furniture</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <ProductFilter />
        </aside>
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}