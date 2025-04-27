import React from "react";
import { Badge } from "@/components/ui/badge";
import apple from "../../public/assets/dashboard/apple.webp";
import banana from "../../public/assets/dashboard/banana.webp";
import brinjal from "../../public/assets/dashboard/brinjal.webp";
import egg from "../../public/assets/dashboard/egg.webp";
import garlic from "../../public/assets/dashboard/garlic.webp";
import onion from "../../public/assets/dashboard/onion.webp";
import radish from "../../public/assets/dashboard/radish.webp";
import turmeric_powder from "../../public/assets/dashboard/turmeric_powder.webp";
import hero1 from "../../public/assets/dashboard/hero1.webp";

const products = [
  {
    id: 1,
    name: "Apple",
    href: "#",
    price: "₹25.00",
    imageSrc: apple,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Brinjal",
    href: "#",
    price: "₹15.00",
    imageSrc: brinjal,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Garlic",
    href: "#",
    price: "₹30.00",
    imageSrc: garlic,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Onion",
    href: "#",
    price: "₹12.00",
    imageSrc: onion,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Radish",
    href: "#",
    price: "₹7.50",
    imageSrc: radish,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Egg",
    href: "#",
    price: "₹40.00",
    imageSrc: egg,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Banana",
    href: "#",
    price: "₹5.00",
    imageSrc: banana,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Turmeric Powder",
    href: "#",
    price: "₹25.00",
    imageSrc: turmeric_powder,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-700"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-neutral-500">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                New Products, Great Deals
              </h1>
              <p className="mt-8 mb-8 text-xl text-gray-200">
                Limited Time Price Drop!
              </p>
            </div>
            <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
              <p className="mt-8 mb-8">
                Grocery Q is a leading online store. We provide an unparalleled
                selection of quality products, an easy shopping experience,
                expedited shipping offers, and exceptional customer service.
                Check out our collection today.
              </p>
              <a
                href="#"
                className="inline-block rounded-md border bg-transparent border-neutral-600 px-8 py-3 text-center font-medium text-white hover:bg-neutral-800"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={hero1.src}
            className="w-148 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4"></div>
        </div>
      </div>

      <div className="bg-transparent">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                {/* Container to position badge above the image */}
                <div className="relative">
                  {/* Badge appears only for Garlic and Radish */}
                  {(product.name === "Garlic" || product.name === "Radish") && (
                    <Badge
                      variant="secondary"
                      className="bg-black text-green-400 absolute top-2 left-2 z-10"
                    >
                      Best Seller
                    </Badge>
                  )}

                  {/* Product Image */}
                  <img
                    alt={product.imageAlt}
                    src={
                      typeof product.imageSrc === "string"
                        ? product.imageSrc
                        : product.imageSrc.src
                    }
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                </div>

                <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                <hr className="my-2 border-gray-600" />
                <p className="mt-1 text-lg font-medium text-white">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
