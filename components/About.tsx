export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Furniture Land
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 20 years, Furniture Land has been your trusted partner in creating 
              beautiful, comfortable homes. We specialize in premium furniture that combines 
              style, quality, and affordability.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our carefully curated collection features pieces from renowned designers and 
              manufacturers, ensuring every item meets our high standards for craftsmanship 
              and durability.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">10,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
              alt="Furniture showroom"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-600 rounded-lg opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-600 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}