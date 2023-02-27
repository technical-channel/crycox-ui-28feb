import React,{useEffect} from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExploreSection from "./components/ExploreSection";
import CreateAccount from "./components/CreateAccount";
import MediaSection from "./components/MediaSection";
import ClientSlider from "./components/ClientSlider";
import Testimonial from "./components/Testimonial";





const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
     <HeroSection/>
     <AboutSection/>
     <ExploreSection/>
     <MediaSection/>
     <ClientSlider/>
     <Testimonial/>
     <CreateAccount/>
    </div>
  );
};

export default HomePage;
