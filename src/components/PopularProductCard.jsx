import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:justify-center max-sm:items-center">
      <img src={ imgURL } alt= { name } className=" w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap2.5">
        <img src= {star} alt="rating" width= { 24 } height={ 24 } />&nbsp;&nbsp;
        <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.8)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold"> { name } </h3>
      <p className="mt-2 text-2xl text-coral-red font-montserrat leading-normal font-semibold"> { price } </p>
    </div>
  )
};

export default PopularProductCard;
