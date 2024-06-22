import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/banner/HeroBanner"; 
import CustomCarousel from './components/Carousel/CustomCarousel';
import AddvertisePIc from './components/banner/AddvertisePIc'; 
import FooterLinks from './components/Footer/FooterLinks';
import ForMen from './components/Header/ForMen';
import HeadingBB from './components/Header/HeadingBB';
import ImageSlider from './components/Imslider/ImageSlider';
<<<<<<< Updated upstream
import Strip from './components/StripImg/Strip';
=======
import ImgSliderMen from "./components/ImgSliderMen/ImgSliderMen"

>>>>>>> Stashed changes
const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroBanner />
      </header>

      <main>
          <div className="container mb-14 mt-14 px-15">
                  <CustomCarousel />
                  <AddvertisePIc /> 
                  <ForMen />
                  <Strip />
                  <HeadingBB />
                  <ImageSlider />
                  {/* <ForMen props ="Men" /> */}
                  <ForMen data= "Men" />
                  <HeadingBB />
                  <ImgSliderMen />
          </div>
        
        </main>

      <footer>
      <FooterLinks /> 
      </footer>
    </> 
  );
};

export default App;
