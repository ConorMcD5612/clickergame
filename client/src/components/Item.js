import React from "react";
import { useState, useEffect } from "react";

export const Item = ({ setCount, multi, count, price, setCps, cps }) => {
  const [numberOfItem, setNumberOfItem] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
        console.log(numberOfItem)
     setCps((cps) => cps + numberOfItem * multi)
     
    }, 1000);
   
    return () => clearInterval(interval);
  }, [count, numberOfItem, setCount, multi]);

  

  const clickHandler = () => {
    setNumberOfItem((numberOfItem) => numberOfItem + 1);
    setCount(count - price);
   
  };

  return (
    <div>
      {multi}x
      <button disabled={count < price} onClick={clickHandler}>
        <h2>{numberOfItem}</h2>
      </button>
    </div>
  );
};
