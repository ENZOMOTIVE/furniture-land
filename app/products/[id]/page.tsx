import ProductDetail from '@/components/ProductDetail';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}