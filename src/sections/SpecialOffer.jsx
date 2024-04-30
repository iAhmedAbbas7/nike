import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center justify-center max-xl:flex-col-reverse gap-10 max-container">
      <div>
        <img src= { offer } 
        width={ 773 }
        height={ 687 }
        className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col max-sm:justify-center max-sm:items-center">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg max-sm:text-center">
          <span className="text-coral-red">Special</span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text capitalize max-sm:text-center">Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
          <p className="mt-6 info-text lg:max-w-lg max-sm:text-center">Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.</p>
          <div className="mt-11 flex flex-wrap gap-4 max-sm:items-center max-sm:justify-center">
            <Button label="Shop Now" iconURL={ arrowRight } />
            <Button label="View Details"  
            backgroundColor="bg-white"
            borderColor= "border-slate-gray" 
            textColor= "text-slate-gray"/>
          </div>
        </div>

    </section>
  )
};

export default SpecialOffer;
