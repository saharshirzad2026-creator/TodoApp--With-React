import { useState, useEffect } from "react";

export default function FifthEffectQuestion() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  return (
    <div className="w-[640px] h-52 bg-white rounded-md gap-3 mx-auto py-8 my-10 shadow-2xl shadow-gray-600">
        <h1 className='text-center text-3xl font-bold text-fuchsia-800 font-serif'>Fourth question of useEffect</h1>
      <input
      className="border border-fuchsia-700 focus:border-2 focus:border-fuchsia-800 py-2 my-5 mx-58 rounded-md px-2 focus:outline-0"
        type="text"
        placeholder="Enter a Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="text-center text-xl font-bold">You entered {count} Characters</p>
    </div>
  );
}