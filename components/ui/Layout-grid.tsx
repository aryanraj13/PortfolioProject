"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Card = {
  id: number;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full p-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-auto gap-4 max-w-7xl mx-auto">
      {cards.map((card) => (
        <div key={card.id}>
          <motion.div
            className="relative overflow-hidden bg-white rounded-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      src={card.thumbnail}
      alt={`Image ${card.id}`}
      className="object-cover w-full h-auto rounded-md transition duration-200"
    />
  );
};
