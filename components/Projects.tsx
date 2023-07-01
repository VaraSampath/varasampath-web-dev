"use client";

import Link from "next/link";
import { useState } from "react";
import { projectDetails } from "@/assets/constants";
import { BsArrowRight } from "react-icons/bs";

const projects = ["Beginner", "Intermediate", "Advanced"];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  return (
    <div
      id="projects"
      className="min-h-screen paddingX  py-12 bg-primary text-white "
    >
      <h1 className="font-bold uppercase tracking-[15px]  opacity-80">
        projects
      </h1>
      <div className="w-full flex justify-center items-center gap-2 sm:gap-6  my-16">
        {projects.map((each) => (
          <button
            key={each}
            onClick={() => setActiveProject(each)}
            className={`${
              activeProject === each
                ? "bg-secondary border-[#00adb5]"
                : "border-white"
            } min-w-100 px-5 py-1 rounded-md capitalize border-2 `}
          >
            {each}
          </button>
        ))}
      </div>
      <div className="flex sm:flex-wrap gap-5 overflow-x-auto max-sm:pb-5 ">
        {projectDetails.map(
          (each) =>
            activeProject === each.category && (
              <div
                key={each.name}
                className=" flex-shrink-0 w-full pb-3 flex flex-col gap-8  lg:gap-4 lg:w-[450px] min-h-[200px] bg-secondary rounded-xl overflow-hidden"
              >
                <img
                  src={each.imgUrl}
                  className="w-full"
                  alt="car rental"
                />
                <div className="text-white px-4 ">
                  <h1 className=" capitalize font-semibold text-lg">
                    {each.name}
                  </h1>
                  <p className=" capitalize my-3">technologies used :</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {each.technologies.map((tech) => (
                      <div
                        key={tech}
                        className=" text-sm px-3 py-1 border-[1px] rounded-sm border-white uppercase"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <Link
                    target="_blank"
                    href={each.linkUrl}
                    className="flex gap-2 w-max items-center capitalize font-semibold text-white hover:text-[#00adb5]"
                  >
                    view website <BsArrowRight />
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Projects;
