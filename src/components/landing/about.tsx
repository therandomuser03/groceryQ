import React from 'react'
import { Button } from '../ui/button'
import { DotPattern } from '../magicui/dot-pattern'
import { cn } from '@/lib/utils'

export default function About() {
  return (
    <div className="mx-auto px-6 lg:px-8 relative flex h-[500px] flex-col items-center justify-center overflow-hidden">

        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] opacity-40 -z-10",
        )}
      />

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* First comes the image now */}
            <img
              alt="Product screenshot"
              src="/images/placeholders/hero2.webp"
              width={2432}
              height={1442}
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-96 md:w-148 md:-ml-4 lg:-ml-0"
            />

            {/* Then comes the text content */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-5xl">
                  About
                </p>
                <p className="mt-8 mb-8 text-xl text-primary">
                  Smart, Affordable Products
                </p>
                <p className="mt-6 mb-6 text-lg/8 text-primary">
                  Our online store was founded by like-minded individuals, a
                  group of professionals dedicated to building innovative, smart
                  and easy online shopping solutions. At GroceryQ, we guarantee
                  that every single purchase you make will be a seamless process
                  from start to finish. Take a look at our site and get in touch
                  with questions or concerns.
                </p>
                <Button variant="secondary">
                    Get in touch
                </Button>
              </div>
            </div>
          </div>
        </div>

  )
}
