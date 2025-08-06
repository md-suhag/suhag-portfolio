import { Loader } from "lucide-react";
import React from "react";

const loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen h-full w-full  bg-black/30">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-black uppercase mb-1 animate-bounce">
          Suhag
        </p>
        <Loader className="animate-spin size-14" />
      </div>
    </div>
  );
};

export default loader;
