import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Furniture Land
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium furniture and home decor.
              Creating beautiful spaces for over 20 years.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="hover:text-orange-600 cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-orange-600 cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-orange-600 cursor-pointer transition-colors" />
            </div>
          </div>



          {/* Featured Image */}
          <div className="flex items-center justify-center">
            <img
              src="/gmaps-test.png"
              alt="Furniture Showcase"
              className="h-[20vh] w-[90vh] object-cover rounded shadow-lg"
            />
          </div>





          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-orange-600 shrink-0" />
                <span className="text-gray-300">Andhapasara road , Near blind school, berhampur city</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-orange-600" />
                <span className="text-gray-300">+91 9090328422</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-orange-600 shrink-0" />
                <span className="text-gray-300">furnitureland2023bam@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Furniture Land. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}