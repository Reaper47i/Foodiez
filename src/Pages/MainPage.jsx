import React from "react";
import CoverImg from "../assets/LandingImg.jpg";

const MainPage = () => {
  return (
    <div>
      <div className="flex w-100 h-[500px] bg-slate-400 justify-center items-center bg-landing bg-cover">
        <div className="text-[70px] font-nunito text-cyan-950 font-bold underline decoration-yellow-400">
          Foodiez
        </div>
      </div>
    </div>
  );
};

export default MainPage;
