import React from 'react'
// import apple from "public/images/categories/fruits/apple.webp";
// import banana from "public/images/categories/fruits/banana.webp";
// import brinjal from "public/images/categories/vegetables/brinjal.webp";
// import egg from "public/images/categories/animalproduct/egg.webp";
// import garlic from "public/images/categories/vegetables/garlic.webp";
// import onion from "public/images/categories/vegetables/onion.webp";
// import radish from "public/images/categories/vegetables/radish.webp";
// import turmeric_powder from "public/images/categories/spices/turmeric_powder.webp";
import { Badge } from '../ui/badge';

const products = [
  {
    id: 1,
    name: "Apple",
    href: "#",
    price: "₹25.00",
    imageSrc: "/images/categories/fruits/apple.webp",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Brinjal",
    href: "#",
    price: "₹15.00",
    imageSrc: "/images/categories/vegetables/brinjal.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Garlic",
    href: "#",
    price: "₹30.00",
    imageSrc: "/images/categories/vegetables/garlic.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Onion",
    href: "#",
    price: "₹12.00",
    imageSrc: "/images/categories/vegetables/onion.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Radish",
    href: "#",
    price: "₹7.50",
    imageSrc: "/images/categories/vegetables/radish.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Egg",
    href: "#",
    price: "₹40.00",
    imageSrc: "/images/categories/animalproduct/egg.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Banana",
    href: "#",
    price: "₹5.00",
    imageSrc: "/images/categories/fruits/banana.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Turmeric Powder",
    href: "#",
    price: "₹25.00",
    imageSrc: "/images/categories/spices/turmeric_powder.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Feature() {
  return (
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
                    src={product.imageSrc}
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

  )
}
