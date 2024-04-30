import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col ">
        <div className="flex flex-col items-start max-sm:items-center">
          <a href="/">
            <img src= { footerLogo } 
            width={ 150 }
            height={ 46 } />
          </a>
          <p className="mt-6 capitalize font-montserrat leading-7 text-base text-white-400 sm:max-w-sm max-sm:text-center">Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.</p>
          <div className="mt-8 flex items-center gap-5">
            { socialMedia.map((icon) => (
              <div className="flex items-center justify-center h-12 w-12 bg-white rounded-full cursor-pointer hover:bg-coral-red" key={ icon.alt }>
                <img src= { icon.src } 
                alt= { icon.alt } 
                width={ 24 }
                height={ 24 }
                />
              </div>
            ))}
          </div>
        </div>

      <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
        { footerLinks.map((section) => (
          <div key={ section }>
            <h4 className="text-white font-montserrat text-2xl font-medium leading-normal mb-6"> {section.title} </h4>
            <ul>
              { section.links.map((link) => (
                <li className="mt-3 text-white-400 leading-normal text-base font-montserrat hover:text-slate-gray cursor-pointer capitalize" key={ link.name }>
                  <a> {link.name} </a>
                </li>
              )) }
            </ul>

          </div>
        )) }
      </div>        

      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-2">
        <div className="flex flex-1 justify-start items-center cursor-pointer gap-2 font-montserrat">
          <img src= { copyrightSign } 
          alt="copy right sign"
          width={20}
          height={20}
          className="rounded-full m-0"
          />
          <p>Copyright. All Rights Reserved.</p>
        </div>
        <div className="text-white-400 font-montserrat">
          <p><a href="mailto:iahmedabbas7@gmail.com">Template By: Ahmed Abbas ; )</a></p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
