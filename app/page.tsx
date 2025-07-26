import {ImageSlider} from "@/components/ImageSlider/imageSlider";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      
    <Navbar/>
    <div className="pt-20"> 
        <ImageSlider />
    </div>
   
    
    </div>
  );
}
