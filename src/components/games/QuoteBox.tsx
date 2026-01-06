"use client";

import { useState } from "react";
import QuoteData from "../../Data/QuoteData";

export default function QuoteBox() {
  const [quote, setQuote] = useState(
    QuoteData[Math.floor(Math.random() * QuoteData.length)]
  );

  return (
    <div className="flex flex-col items-center text-center gap-6">
      <p className="text-xl font-display italic max-w-md">“{quote}”</p>

      <button
        onClick={() =>
          setQuote(QuoteData[Math.floor(Math.random() * QuoteData.length)])
        }
        className="px-4 py-2 rounded-lg
          bg-blue-600 text-white
          hover:bg-blue-700 transition"
      >
        New Quote
      </button>
    </div>
  );
}
