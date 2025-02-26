"use client";
import { cn } from "../../../lib/utils"; 

export function CardDemo2() {
  return (
    (<div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
           
           
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl  text-white   relative z-10">
          Easy Scheduling
                    </h1>
          <p className="font-normal text-sm  text-white   relative z-10 my-4">
            
          Set up your orders effortlessly with a user-friendly interface.
          </p>
        </div>
      </div>
    </div>)
  );
}
