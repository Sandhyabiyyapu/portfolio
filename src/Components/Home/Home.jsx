import React from "react";
// import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          <br />
        A highly motivated B.Tech Computer Science student with a strong foundation in programming, web
development, and database management.
        </p>
      </div>
      <div>
        {/* <img className="" src={avatarImg} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
