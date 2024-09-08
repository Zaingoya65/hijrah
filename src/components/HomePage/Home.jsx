import AlumniTestimonial from "./AlumniTestimonial";
import Donor from "./Donor";
import HeroSec from "./HeroSec"

import Students from "./Students";
import Testimonial from "./Testimonial";




function Home (){
  return(
    <>
    <HeroSec />
    <div className="container">
    <Testimonial />
    <AlumniTestimonial />
    <Students />
    
    <Donor /></div>
    </>
  )
}

export default Home;