"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        `
        fixed top-5
        inset-x-0
        mx-auto

        z-[5000]

        flex items-center justify-center
        gap-8

        px-5 py-3

        rounded-full

        border border-white/10
        bg-black/40
        backdrop-blur-md

        shadow-lg

        w-fit
        max-w-[92vw]

        will-change-transform
        transition-all duration-300
        `,
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link-${idx}`}
          href={navItem.link}
          className="
            text-sm
            text-neutral-300

            hover:text-white
            hover:scale-105

            transition-all duration-300
            whitespace-nowrap
          "
        >
          {navItem.name}
        </Link>
      ))}
    </motion.div>
  );
};