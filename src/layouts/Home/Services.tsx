import React from "react";
import { order, quality, delivery } from "../../assets/index";

import "./services.css";

const Services = () => {
  return (
    <section className="srevices pb-20" aria-label="Services Section">
      <div className="wrapper w-full">
        <div className="heading after before">
          <p className="text-[#EB5757] text-lg text-center font-medium tracking-widest font-poppins uppercase">
            what we serve
          </p>
          <h1 className="text-[45px] text-center pt-2 font-bold font-poppins capitalize tracking-wide">
            Your Favorite Food <br /> Delivery Partner
          </h1>
        </div>
        <div className="services pt-20">
          <div className="card flex flex-row justify-around items-center ">
            <div className="card__content flex flex-col items-center justify-center">
              <div className="img w-52 h-52">
                <img src={order} alt="easy order" className="w-full h-full" />
              </div>
              <h3 className="text-3xl text-center text-slate-900 leading-9 font-poppins font-bold pt-7">
                Easy to order
              </h3>
              <p className="text-lg text-center text-black leading-[30px] font-poppins font-normal pt-4">
                You only need a few steps in <br /> ordering food
              </p>
            </div>
            <div className="card__content flex flex-col items-center justify-center">
              <div className="img w-52 h-52">
                <img
                  src={delivery}
                  alt="easy order"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl text-center text-slate-900 leading-9 font-poppins font-bold pt-7">
                Fatest Delivery
              </h3>
              <p className="text-lg text-center text-black leading-[30px] font-poppins font-normal pt-4">
                Delivery that is always ontime <br /> even faster
              </p>
            </div>
            <div className="card__content flex flex-col items-center justify-center">
              <div className="img w-52 h-52">
                <img src={quality} alt="easy order" className="w-full h-full" />
              </div>
              <h3 className="text-3xl text-center text-slate-900 leading-9 font-poppins font-bold pt-7">
                Best quality
              </h3>
              <p className="text-lg text-center text-black leading-[30px] font-poppins font-normal pt-4">
                Not only fast for us quality is also <br /> number one
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
