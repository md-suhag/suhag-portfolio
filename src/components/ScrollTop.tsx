"use client";

import { ArrowBigUp } from "lucide-react";
import React from "react";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-primary/30 p-2 rounded-full cursor-pointer hover:bg-primary/50 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowBigUp />
    </button>
  );
};

export default ScrollTop;
