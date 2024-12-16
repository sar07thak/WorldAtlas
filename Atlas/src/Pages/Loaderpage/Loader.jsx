import React from "react";
import "../Loaderpage/Loader.css"; // Add custom animations here

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="relative w-36 h-36">
        {/* Central glowing orb */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-cyan-400 rounded-full shadow-[0_0_15px_#00d1ff,0_0_30px_#00d1ff,0_0_60px_rgba(0,209,255,0.5)] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-custom"></div>
        
        {/* Pulsating waves */}
        <div className="absolute top-1/2 left-1/2 w-full h-full border-2 border-cyan-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-expand"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full border-2 border-cyan-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-expand delay-[1s]"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full border-2 border-cyan-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-expand delay-[2s]"></div>
      </div>
    </div>
  );
};

export default Loader;
