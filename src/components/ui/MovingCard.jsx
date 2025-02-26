"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[40rem] rounded-full flex flex-col antialiased  bg-white dark:bg-grid-white/[0.05] items-center justify-center relative  ">
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      
    "With a centralized platform to manage orders, users have a clearer overview of upcoming deliveries and can better plan their shopping.",
    name : "Improved Organization", 
  },
  {
    quote:
      "Consolidating orders can lead to fewer delivery trips, thereby reducing the carbon footprint and contributing to more sustainable consumption.",
    name: "Environmental Impact",
     
  },
  {
    quote: " The platform fosters a sense of community, enabling users to connect, share deals, and coordinate their orders with friends, colleagues, or neighbors.",
    name: "Community Building", 
  },
  {
    quote:
      "By combining orders with friends or neighbors, users can share delivery fees and unlock group discounts, leading to overall cost reductions.",
    name: "Cost Savings", 
  },
  {
    quote:
      "Scheduling orders in advance and allowing others to join streamlines the ordering process. This reduces the hassle of placing multiple individual orders.",
    name: "Scheduling", 
  },
];
