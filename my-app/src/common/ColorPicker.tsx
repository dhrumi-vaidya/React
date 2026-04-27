import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("red");

  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div
      className="w-full h-screen relative"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 flex items-end justify-center pb-10">
        <div className="flex gap-3 bg-white p-4 rounded-xl">
          {colors.map((item) => (
            <button
              key={item}
              onClick={() => setColor(item)}
              className={`px-4 py-2 rounded text-white cursor-pointer ${
                color === item ? "ring-2 ring-gray-800" : ""
              }`}
              style={{ backgroundColor: item }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;