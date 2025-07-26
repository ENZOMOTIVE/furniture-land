import * as React from "react"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80", // modern living room
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",    // leather couch
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1600&q=80", // clean white couch
 
];





export function ImageSlider() {
  return (
    <div className="p-1 w-full flex justify-center items-center px-4">
      <Carousel className="w-full max-w-screen-xl">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="h-[60vh] w-full">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
