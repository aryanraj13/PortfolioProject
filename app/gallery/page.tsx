"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gilroy, nyght } from "@/utils/fonts";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { cinemaposters, navItems, techstacklogos } from "@/data";
import { ParallaxScroll } from "@/components/ui/Parallax-scroll";
import { Cinema } from "@/components/ui/Cinemacards";
import { BackgroundBeams } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { LayoutGrid } from "@/components/ui/Layout-grid";
import { LinkPreview } from "@/components/ui/LinkPreview";

const Page = () => {
  return (
    <div className="relative bg-black flex flex-col overflow-clip mx-auto sm:px-10 px-2 items-center">
      <div className="z-30">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-0 bg-clip-text tracking-tight text-center"
        >
          <Image src="/lifefront.png" alt="loadingImg" height="800" width="1200" className="mx-auto" />
          <div className="mt-8">
            <span className={`${nyght} text-5xl text-shadow text-shadow-orange-500 text-shadow-x-1 text-shadow-y-1 text-shadow-blur-9`}>
              Cinema, music
              <div>
                & more
              </div>
            </span>
            <div className={`text-base ${gilroy} max-w-80 mx-auto justify-center mt-6`}>
              Few things in life which inspire us, move us, give us a reason to live rather than just surviving. I would take the privilege to share my share of inspiration
            </div>
          </div>
          <div className="text-2xl text-slate-400 text-center justify-center pt-20 ">
            Movies & shows that belong in museum.
          </div>
          <div className="text-base text-slate-400 flex flex-col items-center gap-2 pb-4 pt-2">
  <div className="flex items-center gap-2">
    <span>Visit my</span>
    <LinkPreview url="https://boxd.it/bwBl5" className="font-bold">
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-slate-400">
        <div className="flex items-center gap-2">
          <Image
            src="/icons8-letterboxd-48.png"
            alt="Letterboxd Icon"
            width={24}
            height={24}
            className="inline-block"
          />
          <span className={nyght}>Letterboxd</span>
        </div>
      </button>
    </LinkPreview>
  </div>
</div>


        </motion.h1>
        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <Cinema items={cinemaposters} direction="right" speed="normal" />
        </div>
      </div>
      <BackgroundBeams />
      <div className={`text-base ${gilroy} mx-auto justify-center mt-6 text-slate-400`}>
        Few things in life which inspire us, move us, give us a reason to live rather than just surviving. I would take the privilege to share my share of inspiration
      </div>
      <h1 className='heading lg:max-w-[45vw] mb-7 mt-12 text-shadow text-shadow-amber-800 text-shadow-x-1 text-shadow-y-1 text-shadow-blur-9 z-20'>
        Life through my <LinkPreview url="https://in.pinterest.com/aryanraj_13/_pins/" className="font-bold">
                
              <button className="inline-flex h-16 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-slate-400">
                  <span className={`${nyght}`}>eyes</span>
                </button>
                </LinkPreview>
      </h1>
      <div className="w-[40rem]  relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      <div className=" py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
      {/* <ParallaxScroll images={images} /> */}
    </div>
  );
};

export default Page;


const imageFilenames = [
  "IMG_1293.JPG",
  "IMG_1294.JPG",
  "IMG_1301.JPG",
  "IMG_1305.JPG",
  "IMG_1746.jpg",
  "IMG_1765.jpg",
  "IMG_1779.jpg",
  "IMG_1785.jpg",//edhso
  "IMG_1769.jpg",
  "IMG_1847.jpg",
  "IMG_20221226_020839_229.jpg",
  "IMG_20231209_223018_754.jpg",
  "IMG_1788.jpg",
  "IMG_1845.jpg",
  "IMG_1850.jpg",
  "IMG_20231209_223006_303.jpg",
  "IMG_20231213_190252_446.jpg",
  "IMG_20231218_172526.jpg",
  "IMG_20231219_082423.jpg",
  "IMG_20240425_203216_516.jpg",
  "IMG_20240425_203216_708.jpg",
  "IMG_20240524_111923.jpg",
  "IMG_20240524_192633.jpg"
];

 
const cards = imageFilenames.map((filename, index) => ({
  id: index + 1,
  thumbnail: `/photos/${filename}`,
}));