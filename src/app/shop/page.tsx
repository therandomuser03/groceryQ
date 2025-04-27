import Navbar from "@/components/Navbar";

import oranges from "../../../public/assets/shop/163.webp";
import pulses from "../../../public/assets/shop/1637386982974.webp";
import dryRedChillies from "../../../public/assets/shop/1637386982999.webp";
import jeera from "../../../public/assets/shop/1637386983022.webp";
import mustardSeeds from "../../../public/assets/shop/1637386983119.webp";
import cauliflower from "../../../public/assets/shop/1637386983144.webp";
import greenCombo from "../../../public/assets/shop/1637386983167.webp";
import bottleGourd from "../../../public/assets/shop/1637386983191.webp";
import rice from "../../../public/assets/shop/1637386983215.webp";
import turmericRoot from "../../../public/assets/shop/1637388454727.webp";
import greenChillies from "../../../public/assets/shop/1637388454752.webp";
import brinjal from "../../../public/assets/shop/1637388454781.webp";
import redOnions from "../../../public/assets/shop/1637388454810.webp";
import clusterBeans from "../../../public/assets/shop/1637388454862.webp";
import apples from "../../../public/assets/shop/1637388454935.webp";
import whiteRoses from "../../../public/assets/shop/1637388454956.webp";
import turmericPowder from "../../../public/assets/shop/1637390513274.webp";
import salt from "../../../public/assets/shop/1637390513310.webp";
import saltPowder from "../../../public/assets/shop/1637390513338.webp";
import eggs from "../../../public/assets/shop/PicsArt_11-20-12.53.51.webp";

const products = [
  {
    id: 1,
    name: 'Oranges',
    href: '#',
    price: '₹120/kg',
    imageSrc: oranges,
    imageAlt: 'Fresh oranges on display.',
  },
  {
    id: 2,
    name: 'Pulses (Dal)',
    href: '#',
    price: '₹95/kg',
    imageSrc: pulses,
    imageAlt: 'Various pulses in sacks.',
  },
  {
    id: 3,
    name: 'Dry Red Chillies',
    href: '#',
    price: '₹200/kg',
    imageSrc: dryRedChillies,
    imageAlt: 'Dry red chillies in a bag.',
  },
  {
    id: 4,
    name: 'Cumin Seeds (Jeera)',
    href: '#',
    price: '₹350/kg',
    imageSrc: jeera,
    imageAlt: 'Heap of cumin seeds.',
  },
  {
    id: 5,
    name: 'Mustard Seeds',
    href: '#',
    price: '₹90/kg',
    imageSrc: mustardSeeds,
    imageAlt: 'Mustard seeds packed in a sack.',
  },
  {
    id: 6,
    name: 'Cauliflower',
    href: '#',
    price: '₹45/piece',
    imageSrc: cauliflower,
    imageAlt: 'Fresh cauliflowers.',
  },
  {
    id: 7,
    name: 'Green Vegetables Combo',
    href: '#',
    price: '₹250/combo',
    imageSrc: greenCombo,
    imageAlt: 'Mixed fresh green vegetables.',
  },
  {
    id: 8,
    name: 'Bottle Gourd (Lauki)',
    href: '#',
    price: '₹40/kg',
    imageSrc: bottleGourd,
    imageAlt: 'Fresh bottle gourds.',
  },
  {
    id: 9,
    name: 'Rice',
    href: '#',
    price: '₹55/kg',
    imageSrc: rice,
    imageAlt: 'Heap of rice grains.',
  },
  {
    id: 10,
    name: 'Turmeric Root',
    href: '#',
    price: '₹150/kg',
    imageSrc: turmericRoot,
    imageAlt: 'Bright yellow turmeric roots.',
  },
  {
    id: 11,
    name: 'Green Chillies',
    href: '#',
    price: '₹80/kg',
    imageSrc: greenChillies,
    imageAlt: 'Green chillies in bunches.',
  },
  {
    id: 12,
    name: 'Eggplant (Brinjal)',
    href: '#',
    price: '₹60/kg',
    imageSrc: brinjal,
    imageAlt: 'Fresh purple brinjals.',
  },
  {
    id: 13,
    name: 'Red Onions',
    href: '#',
    price: '₹35/kg',
    imageSrc: redOnions,
    imageAlt: 'Heap of red onions.',
  },
  {
    id: 14,
    name: 'Cluster Beans (Guar)',
    href: '#',
    price: '₹70/kg',
    imageSrc: clusterBeans,
    imageAlt: 'Fresh green cluster beans.',
  },
  {
    id: 15,
    name: 'Apples',
    href: '#',
    price: '₹150/kg',
    imageSrc: apples,
    imageAlt: 'Fresh apples.',
  },
  {
    id: 16,
    name: 'White Roses',
    href: '#',
    price: '₹300/bunch',
    imageSrc: whiteRoses,
    imageAlt: 'Fresh white roses.',
  },
  {
    id: 17,
    name: 'Fresh Turmeric Powder',
    href: '#',
    price: '₹250/kg',
    imageSrc: turmericPowder,
    imageAlt: 'Turmeric powder heap.',
  },
  {
    id: 18,
    name: 'Salt',
    href: '#',
    price: '₹20/kg',
    imageSrc: salt,
    imageAlt: 'Heap of white salt.',
  },
  {
    id: 19,
    name: 'Salt Powder',
    href: '#',
    price: '₹25/kg',
    imageSrc: saltPowder,
    imageAlt: 'Fine salt powder.',
  },
  {
    id: 20,
    name: 'Fresh Eggs',
    href: '#',
    price: '₹6/egg',
    imageSrc: eggs,
    imageAlt: 'White and brown eggs.',
  },
];

export default function Shop() {
  return (
    <div>
      <Navbar />
      <div className="bg-neutral-950">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc.src}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-500">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-200">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
