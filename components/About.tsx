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
             Furniture Land is your one-stop destination for timeless, handcrafted wooden furniture that blends tradition with modern comfort. Established in 2023, we take pride in offering beautifully carved pieces that add elegance and functionality to every space—be it your living room, bedroom, dining area, or office.


            </p>
            <p className="text-lg text-gray-600 mb-8">
              At Furniture Land, every item is a result of skilled craftsmanship, premium-quality wood, and attention to detail. From classic to contemporary designs, we specialize in custom-made furniture tailored to your style and space requirements.

            </p>
            <div className="grid grid-cols-3 gap-4 text-center ">
              <div>
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">10,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            
          </div>
          <div className="relative shrink-0">
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