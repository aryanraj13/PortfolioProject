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
    <div className="relative bg-black flex flex-col overflow-hidden mx-auto px-4 sm:px-6 md:px-10 items-center">
      <div className="z-30 w-full max-w-7xl">
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
          <Image
            src="/lifefront.png"
            alt="loadingImg"
            height={800}
            width={1200}
            className="mx-auto w-full h-auto max-w-4xl rounded-lg"
          />
          <div className="mt-8 px-2 sm:px-4">
            <span className={`${nyght} text-3xl sm:text-5xl text-shadow text-shadow-orange-500`}>
              Cinema, music
              <div>& more</div>
            </span>
            <div className={`text-sm sm:text-base ${gilroy} mx-auto max-w-md text-center mt-6 text-slate-300`}>
              Few things in life which inspire us, move us, give us a reason to live rather than just surviving. I would take the privilege to share my share of inspiration
            </div>
          </div>

          <div className="text-lg sm:text-2xl text-slate-400 text-center pt-10 px-2">
            Movies & shows that belong in museum.
          </div>

          <div className="text-base text-slate-400 flex flex-col items-center gap-2 pb-6 pt-4">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span>Visit my</span>
              <LinkPreview url="https://boxd.it/bwBl5" className="font-bold">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors hover:text-slate-400">
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

        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
          <Cinema items={cinemaposters} direction="right" speed="normal" />
        </div>
      </div>

      <BackgroundBeams />

      <div className={`text-sm sm:text-base ${gilroy} mx-auto text-center mt-6 text-slate-400 px-4 max-w-xl`}>
        Few things in life which inspire us, move us, give us a reason to live rather than just surviving. I would take the privilege to share my share of inspiration
      </div>

      <h1 className="heading text-center text-shadow text-shadow-amber-800 mt-12 mb-7 px-4 lg:max-w-[45vw] z-20 text-3xl sm:text-4xl">
        Life through my{" "}
        <LinkPreview url="https://in.pinterest.com/aryanraj_13/_pins/" className="font-bold">
          <button className="inline-flex h-14 sm:h-16 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-slate-400 mt-2">
            <span className={`${nyght}`}>eyes</span>
          </button>
        </LinkPreview>
      </h1>

      <div className="relative w-full max-w-4xl px-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>

      <div className="py-10 w-full px-4">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};

export default Page;

const imageFilenames = [
  "IMG_1293.JPG", "IMG_1294.JPG", "IMG_1301.JPG", "IMG_1305.JPG",
  "IMG_1746.jpg", "IMG_1765.jpg", "IMG_1779.jpg", "IMG_1785.jpg",
  "IMG_1769.jpg", "IMG_1847.jpg", "IMG_20221226_020839_229.jpg", "IMG_20231209_223018_754.jpg",
  "IMG_1788.jpg", "IMG_1845.jpg", "IMG_1850.jpg","photo_6319088815016364286_y.jpg",
  "photo_6052875214318057988_y.jpg",
  "photo_6319088815016364264_y.jpg", 
  "photo_6319088815016364266_y.jpg",
  "photo_6319088815016364268_y.jpg",
  "photo_6319088815016364256_y.jpg",
  "photo_6319088815016364251_y.jpg",
  "photo_6319088815016364253_y.jpg",
  "photo_6319088815016364272_y.jpg",//gh
  "photo_6319088815016364263_y.jpg",
  "photo_6319088815016364285_y.jpg",
  "photo_6319088815016364281_y.jpg",
  "IMG_20240524_193740.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_403a2699.jpg",
  "photo_6319088815016364282_y.jpg",
  "photo_6319088815016364283_y.jpg",
  "photo_6319088815016364284_y.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_3c30febb.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_246fc5c5.jpg",
  "photo_6319088815016364260_y.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_13675d19.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_a03d274b.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_a7d283d7.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_b12f2ca8.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_c6aa6688.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_ccebafcf.jpg",
  "WhatsApp Image 2025-07-15 at 16.22.26_d7301fcd.jpg",
  "IMG_20231218_172526.jpg","photo_6319088815016364270_y.jpg","WhatsApp Image 2025-07-15 at 16.22.26_c84486a4.jpg","IMG_20231219_082423.jpg",
  "photo_6319088815016364267_y.jpg","WhatsApp Image 2025-07-15 at 16.22.26_6737f13c.jpg","WhatsApp Image 2025-07-15 at 16.22.26_328cb1fc.jpg","IMG-20230919-WA0074.jpg","photo_6319088815016364265_y.jpg","photo_6319088815016364261_y.jpg"
];

const cards = imageFilenames.map((filename, index) => ({
  id: index + 1,
  thumbnail: `/photos/${filename}`,
}));
