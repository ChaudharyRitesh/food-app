import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

interface FoodData {
  id: number;
  food_name: string;
  food_category: string;
  food_image: string;
  rating: number;
  price: number;
  description?: string;
}

interface SliderProps {
  data: FoodData[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = (): void => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider pt-3">
      <div className="slider-wrapper flex flex-row gap-5">
        {data.map((food, index) => (
          <div
            key={food.id}
            style={{
              backgroundImage: `url(${food.food_image})`,
              width: 280,
              height: 360,
              color: "white",
            }}
            className={` relative bg-cover rounded-[25px] bg-no-repeat  ${index} === ${currentSlide} ? "slide active" : "slide"`}>
            {/* <img
              width={250}
              height={150}
              src={food.food_image}
              alt={food.food_name}
            /> */}
            <div className="slide-content absolute bottom-3 px-2 md:px-6">
              <h2>{food.food_name}</h2>
              <p>Price: ${food.price}</p>
              <div className="flex flex-row items-center justify-center gap-4">
                <span>Order Now</span>
                <span>
                  <Unicons.UilAngleRightB color="white" size={20} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-group pt-3 flex flex-row sm:flex sm:flex-row sm:gap-3">
        <button
          className="btn w-10 h-10 flex items-center justify-center rounded-full bg-[#EB5757] text-white text-center font-bold"
          onClick={prevSlide}>
          <Unicons.UilAngleLeftB color="white" size={20} />
        </button>
        <button
          className="next-btn w-10 h-10 flex items-center justify-center rounded-full bg-[#EB5757] text-white text-center font-bold"
          onClick={nextSlide}>
          <Unicons.UilAngleRightB color="white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
