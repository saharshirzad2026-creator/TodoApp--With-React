import { useState, useEffect } from "react";

export default function SixthEffectQuestion() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      function getSize(){
        setWidth(window.innerWidth);
      }
      window.onresize = getSize;
    return;
  }, [width]);

  return (
    <div className="w-[640px] h-52 bg-white rounded-md gap-3 mx-auto py-8 my-10 shadow-2xl shadow-gray-600">
        <h1 className='text-center text-3xl font-bold text-fuchsia-800 font-serif'>Fifth question of useEffect</h1>
      <h2 className="text-center pt-5 text-xl font-bold bg-linear-60 from-fuchsia-800 via-fuchsia-400 to-fuchsia-800 text-transparent bg-clip-text">The width of screen is {width}</h2>
    </div>
  );
}