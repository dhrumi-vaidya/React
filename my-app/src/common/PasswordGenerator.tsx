import { use, useCallback, useEffect, useRef, useState } from "react";

export const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");
const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (symbol) str += "!@#$%^&*()_+";
    if (number) str += "0123456789";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, symbol,setPassword]);
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
}, [password]);
useEffect(() => {
  passwordGenerator();
}, [length, number, symbol,setPassword])
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Generated Password"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none"

          />

          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={copyPasswordToClipboard
            }
          >
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Length: {length}
          </label>

          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) =>
              setLength(parseInt(e.target.value))
            }
            className="w-full"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-4 mb-6">
          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              checked={number}
              onChange={() =>
                setNumber((prev) => !prev)
              }
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              checked={symbol}
              onChange={() =>
                setSymbol((prev) => !prev)
              }
            />
            Include Symbols
          </label>
        </div>

      
      </div>
    </div>
  );
};