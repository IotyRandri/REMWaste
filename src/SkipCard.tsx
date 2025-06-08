import { useState } from "react";

import "./SkipCard.css";

interface SkipCardProps {
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
const img_url = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg";

export default function SkipCard({ skipCardProps }: { skipCardProps: SkipCardProps }) {
  const [flipped, setFlipped] = useState(false); // Use this state to manage flipping of card

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

    return (

      <div
        className={`relative w-72 h-[400px] cursor-pointer perspective`}
        onClick={handleFlip}
      >
        <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
          {/* FRONT SIDE */}
          <div className="flip-card-front bg-gray-200 p-6 rounded-md shadow-lg text-center">
            <div className="flex justify-between items-center mb-4">
              <div className="w-1/2 flex items-center justify-center">
                <h2 className="text-xl font-semibold">
                  {skipCardProps.size} Yard Skip
                </h2>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <button
                  className="bg-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent outer div from toggling again
                    handleFlip();
                  }}
                >
                  Select
                </button>
              </div>
            </div>

            <img
              src={img_url}
              alt={`${skipCardProps.size} Yard`}
              className="mb-4 rounded w-full h-40 object-cover"
            />
            <p className="italic text-gray-900 mb-4">
              {skipCardProps.hire_period_days} day hire period
            </p>
            <p className="text-green-500 mb-4">
              £{skipCardProps.price_before_vat.toFixed(2)}
            </p>
          </div>

          {/* BACK SIDE */}
          <div className="flip-card-back bg-white rounded-md shadow-lg text-center flex flex-col justify-center items-center p-6">
            <h2 className="text-lg font-semibold mb-4">
              {skipCardProps.size} Yard Skip
            </h2>
            <p className="text-green-500 mb-4">£{skipCardProps.price_before_vat.toFixed(2)}</p>
            <p className="mb-2">Allowed on road: {skipCardProps.allowed_on_road ? "Yes" : "No"}</p>
            <p className="mb-4">Hire Period: {skipCardProps.hire_period_days} day</p>

            <div className="flex justify-between mt-6">
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
              >
                Back
              </button>
              <button
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={(e) => {
                  e.stopPropagation();
                  // alert("Continue clicked!");
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}