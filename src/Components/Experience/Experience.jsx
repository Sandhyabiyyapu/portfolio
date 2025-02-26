//skills
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaCloud } from "react-icons/fa";
import { SiAmazonaws } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <FaHtml5 color="#E34F26" size={50} />
      </span>
      <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <FaCss3 color="#1572B6" size={50} />
      </span>
      <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <FaJs color="#F7DF1E" size={50} />
      </span>
      <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <FaReact color="#61DAFB" size={50} />
      </span>
      <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <FaCloud color="#ffffff" size={50} /> {/* Cloud icon */}
      </span>
      <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <FaJava color="#007396" size={50} /> {/* Java icon */}
      </span>
      <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <SiAmazonaws color="#FF9900" size={50} /> {/* AWS icon */}
      </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-bold">Programming Languages</h2>
              <br />
              <p>Java, Python, C, SQL, Kotlin.</p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-bold">Web Development</h2>
              <br />
              <p>HTML, CSS, JavaScript,react.</p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-bold">Database Management</h2>
              <p>SQL, MySQL</p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-bold">Problem Solving and Algorithms</h2>
              <p>Data Structures, Problem Solving.</p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-bold">Cloud Platforms</h2>
              <p>AWS(EC2, S3)</p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <span className="text-white">
            <h2 className="leading-tight font-bold">Languages</h2>
              <p>Proficient in English (Reading, Writing, Speaking), Fluent in Telugu.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
