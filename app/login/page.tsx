"use client";

import React, { useRef, useState, useEffect } from "react";

export default function LoginPage() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [code, setCode] = useState(["", "", "", ""]);

  // Focus first input on pageload
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // Handle input change
  const handleInputChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input if available
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // Automatically submit if all inputs are filled
    if (newCode.every((digit) => digit !== "")) {
      handleSubmit(newCode);
    }
  };

  // Handle key press (for backspace)
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Handle form submission
  const handleSubmit = (submittedCode = code) => {
    const fullCode = submittedCode.join("");
    if (fullCode.length === 4) {
      console.log("Entered Code:", fullCode);
      // Replace with your validation logic
      alert(`Code entered: ${fullCode}`);
    } else {
      alert("Please enter all 4 digits.");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-2/3 text-center">
        <h1 className="text-6xl mb-4">Welcome to the MKG-Bingo!</h1>
        <h2 className="text-4xl mb-4">Please enter your 4-digit PIN</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="mb-4 p-2"
        >
          <div className="flex justify-center gap-2 mb-4">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={code[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                className="w-12 border rounded text-center text-2xl bg-neutral-200 border-black transition-all duration-300 focus:border-blue-500 focus:outline-none"
              ></input>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
