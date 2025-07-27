'use client';

import { useState } from 'react';

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 2000]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Category</h4>
        <div className="space-y-2">
          {['Living Room', 'Bedroom', 'Dining Room', 'Office'].map((category) => (
            <label key={category} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Brand</h4>
        <div className="space-y-2">
          {['Modern Living', 'Classic Comfort', 'Urban Style', 'Luxury Home'].map((brand) => (
            <label key={brand} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Material</h4>
        <div className="space-y-2">
          {['Wood', 'Metal', 'Fabric', 'Leather'].map((material) => (
            <label key={material} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">{material}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="btn-primary w-full">
        Apply Filters
      </button>
    </div>
  );
}