import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";
const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center max-container">
      {/* Text Section */}
      <div className="xl:w-2/5 relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pb-3 max-sm:justify-center max-sm:items-center"> 
        <p className="text-xl font-montserrat text-coral-red font-[500] uppercase max-sm:text-center">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold max-sm:text-center">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 relative pr-10 rounded max-sm:pr-0">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-2.5">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm max-sm:text-center">Discover Stylish Nike Arrivals, Quality Comfort, & Innovation For Your Active Life.</p>
          <Button label="Shop Now" iconURL= { arrowRight } />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-sm:justify-center max-sm:items-center max-sm:mt-16">
            { statistics.map((stat) => (
              <div key={ stat.label }>
                <p className="font-palanquin text-4xl font-bold"> { stat.value } </p>
                <p className="font-montserrat leading-7 text-slate-gray"> { stat.label } </p>
              </div>
            ))}
          </div>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover pb-3">
        <img 
        src= { bigShoeImg } 
        alt="shoe collection"
        width={ 610 }
        height={502}
        className="object-contain relative z-10" 
        />

      <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%] max-sm:px-6">
        { shoes.map((shoe) => (
          <div key={ shoe }>
            <ShoeCard 
            imgURL = { shoe }
            changeBigShoeImage= 
            { (shoe) => setBigShoeImg(shoe) }
            bigShoeImage ={ bigShoeImg }
             />
          </div>
        )) }
      </div>        

      </div>

    </section>
  );
};

export default Hero;
