"use client"

import Approach from "@/components/Approach";
import Code from "@/components/Code";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RecentProjects from "@/components/RecentProjects";
import { CodeBlock } from "@/components/ui/code-block";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <>
        <div className="relative bg-black sm:px-10 px-5"><Hero/></div>
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
        
        
         <Grid/>
        <RecentProjects/>
        <Projects/>
        <Experience/>
        <Code/>
        {/* <Approach/> */}
        <Footer/> 
      </div>
    </main>
    </>

  );
}
