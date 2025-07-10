"use client";
import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalProvider,
  ModalTrigger,
  useModal,
} from "@/components/ui/AnimatedModal";
import { AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Link from "next/link";
import { gilroy, nyght } from "@/utils/fonts";

// ✅ Parent component
const RecentProjects = () => {
  const [activeProject, setActiveProject] = useState<null | {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
  }>(null);

  return (
    <ModalProvider>
      <RecentProjectsContent
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
    </ModalProvider>
  );
};

export default RecentProjects;

// ✅ Content inside ModalProvider
const RecentProjectsContent = ({
  activeProject,
  setActiveProject,
}: {
  activeProject: any;
  setActiveProject: any;
}) => {
  const { open } = useModal();

  useEffect(() => {
    if (!open) setActiveProject(null);
  }, [open]);

  return (
    <div className="py-20" id="projects">
      {/* Header */}
      <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative h-[10rem] md:h-[18rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        <AnimatePresence>
          <div className="h-full w-full absolute inset-0">
            
          </div>
        </AnimatePresence>
        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 text-5xl font-bold text-shadow text-shadow-fuchsia-800">
            Recent<span className={`${nyght} mx-3 mt-1.5`}>Projects</span>
          </div>
          <h2
            className={`dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 ${gilroy}`}
          >
            A small selection of my recent works.
          </h2>
        </div>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <Modal>
              <PinContainer title={item.link} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <ModalTrigger onClick={() => setActiveProject(item)}>
                      <span className="flex lg:text-xl md:text-xs text-sm mr-4 text-purple hover:text-indigo-700">
                        Description
                        <CgNotes className="ms-2 mt-1" color="#CBACF9" />
                      </span>
                    </ModalTrigger>
                    <Link href={item.link} target="_blank">
                      <p className="flex lg:text-xl md:text-xs text-sm text-green-500 hover:text-green-700">
                        Live Site
                      </p>
                    </Link>
                    <FaLocationArrow className="ms-3" color="#7CFC00" />
                  </div>
                </div>
              </PinContainer>

              <ModalBody>
                <ModalContent>
                  {activeProject && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-purple-500 mb-4">
                        {activeProject.title}
                      </h2>
                      <img
                        src={activeProject.img}
                        alt={activeProject.title}
                        className="w-full max-h-64 object-contain rounded-xl mb-4"
                      />
                      <p className="text-gray-300 text-lg mb-4">
                        {activeProject.des}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        {activeProject.iconLists.map((icon:string, index:number) => (
                          <img
                            key={index}
                            src={icon}
                            alt={`tech-${index}`}
                            className="h-10 w-10 p-1 border border-gray-700 rounded-full bg-black"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

// Supporting Icon
const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
