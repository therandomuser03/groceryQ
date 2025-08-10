import React from "react";
import { Button } from "../ui/button";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="mx-auto pt-32 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

        <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />

      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              New Products, Great Deals
            </h1>
            {/* <p className="mt-8 mb-8 text-xl text-gray-200">
                Limited Time Price Drop!
              </p> */}
          </div>
          <div className="max-w-xl text-base/7 text-primary lg:max-w-lg">
            <p className="mt-8 mb-8">
              GroceryQ is a leading online store. We provide an unparalleled
              selection of quality products, an easy shopping experience,
              expedited shipping offers, and exceptional customer service. Check
              out our collection today.
            </p>
            <Button variant="secondary">Shop Now</Button>
          </div>
        </div>
      </div>
      <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          alt=""
          src="/images/placeholders/hero1.webp"
          className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-96 md:w-148"
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4"></div>
      </div>
    </div>
  );
}
