"use client";

import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12); // Default password length
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let chars = "";
    if (includeLowercase) chars += lowercaseLetters;
    if (includeUppercase) chars += uppercaseLetters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let newPassword = "";
    if (chars.length > 0) {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        newPassword += chars[randomIndex];
      }
    }

    setPassword(newPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-500 p-6 rounded-sm shadow-md max-w-lg min-w-96">
        <h1 className="text-2xl text-center font-bold mb-4">
          Password Generator
        </h1>
        <div className="flex items-center mb-4">
          <div className="flex align-center justify-between flex-1 bg-gray-950 px-3 py-2 min-h-10 text-white">
            <div className="text-lg">{password}</div>
            <div
              className="p-1 cursor-pointer rounded-sm bg-gray-600 hover:bg-gray-400"
              onClick={() => navigator.clipboard.writeText(password)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <label className="mr-2">Password length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="border-none bg-gray-950 rounded text-white text-right"
            min="4"
            max="32"
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="includeLowercase">Include lowercase letters</label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            id="includeLowercase"
            className="accent-gray-950"
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="includeUppercase">Include uppercase letters</label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            id="includeUppercase"
            className="accent-gray-950"
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="includeNumbers">Include numbers</label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            id="includeNumbers"
            className="accent-gray-950"
          />
        </div>
        <div className="flex justify-between mb-4">
          <label htmlFor="includeSymbols">Include symbols</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            id="includeSymbols"
            className="accent-gray-950"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={generatePassword}
            className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded w-full"
          >
            Generate password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
