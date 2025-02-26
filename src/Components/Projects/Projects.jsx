import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Employee Payroll Management System"
          main="Developed a secure payroll management system using Java and Servlets, allowing employees to access
payroll slips and manage personal information via authenticated credentials.
• Streamlined payroll processing with automated tax calculations and real-time slip generation."
        />
        <ProjectCard
          title="Blood Bank Management System"
          main="Developed a web application using the MERN stack to connect donors, recipients, and hospitals,
facilitating blood donations and management.
• Enabled real-time blood availability tracking, notifications, and seamless communication between
donors, hospitals, and organizations."
        />
      </div>
    </div>
  );
};

export default Projects;
