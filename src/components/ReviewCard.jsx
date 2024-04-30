import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src= { imgURL } 
      alt="customer" 
      className="rounded-full object-cover w-[120px] h-[120px]"/>
      <p className="mt-6 max-w-sm text-center info-text capitalize"> {feedback} </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src= { star }
        width={ 24 }
        height={ 24 }
        className="object-contain" />
        <p className="text-xl font-montserrat text-slate-gray"> ({rating}) </p>
      </div>
      <h3 className="mt-1 text-center font-bold font-palanquin text-3xl"> { customerName } </h3>
    </div>
  )
};

export default ReviewCard;
