import HeroSlider from '@/components/HeroSlider';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import About from '@/components/About';

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Categories />
      <FeaturedProducts />
      <About />
    </div>
  );
}