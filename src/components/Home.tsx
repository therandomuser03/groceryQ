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
import hero2 from "../../public/assets/dashboard/hero-2.webp";
import hero3 from "../../public/assets/dashboard/hero3.png";
import { DotPattern } from "./magicui/dot-pattern";
import { Facebook, Twitter, Linkedin } from "lucide-react";

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

const links = [
  { name: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { name: "Twitter", href: "https://www.twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-950 px-4 sm:px-6 lg:px-8">
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
      <div className="mx-auto pt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                New Products, Great Deals
              </h1>
              <p className="mt-8 mb-8 text-xl text-gray-200">
                Limited Time Price Drop!
              </p>
            </div>
            <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
              <p className="mt-8 mb-8">
                GroceryQ is a leading online store. We provide an unparalleled
                selection of quality products, an easy shopping experience,
                expedited shipping offers, and exceptional customer service.
                Check out our collection today.
              </p>
              <a
                href="/shop"
                className="inline-block rounded-md border bg-transparent border-neutral-600 px-8 py-3 text-center font-medium text-white hover:bg-neutral-800 transition"
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
            className="w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-96 md:w-148"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4"></div>
        </div>
      </div>

      <div className="bg-neutral-950">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 transition"
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

      <div className="overflow-hidden bg-neutral-950 py-24 sm:py-32 relative">
        <DotPattern className="opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* First comes the image now */}
            <img
              alt="Product screenshot"
              src={hero2.src}
              width={2432}
              height={1442}
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-96 md:w-148 md:-ml-4 lg:-ml-0"
            />

            {/* Then comes the text content */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-200 sm:text-5xl">
                  About
                </p>
                <p className="mt-8 mb-8 text-xl text-gray-200">
                  Smart, Affordable Products
                </p>
                <p className="mt-6 mb-6 text-lg/8 text-gray-400">
                  Our online store was founded by like-minded individuals, a
                  group of professionals dedicated to building innovative, smart
                  and easy online shopping solutions. At GroceryQ, we guarantee
                  that every single purchase you make will be a seamless process
                  from start to finish. Take a look at our site and get in touch
                  with questions or concerns.
                </p>
                <a
                  href="/contact"
                  className="inline-block rounded-md border bg-transparent border-neutral-600 px-8 py-3 text-center font-medium text-white hover:bg-neutral-800 transition"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-neutral-950 py-24 sm:py-32">
        <img
          alt=""
          src={hero3.src}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Reach out to us
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              For general inquiries or feedback, please get in touch with us.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 items-center text-base/7 font-semibold text-white sm:grid-cols-2 md:flex md:flex-wrap lg:gap-x-10">
              <a
                href="mailto:contact@groceryq.com"
                className="inline-flex items-center gap-2 rounded-md border bg-transparent border-neutral-600 px-4 py-2 text-center font-medium text-white hover:bg-neutral-800 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5m0 0L2.25 6.75m9.75 6.5v.001"
                  />
                </svg>
                Email Us
              </a>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>{" "}
                  {/* For accessibility */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center gap-x-6 overflow-hidden bg-neutral-950 px-6 py-2.5">
        <p className="text-sm/6 text-gray-200">
          <strong className="font-semibold">&copy; 2021 </strong>
          GroceryQ. All rights reserved.
        </p>
      </div>
    </div>
  );
}
