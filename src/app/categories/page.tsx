"use client";

const callouts = [
  {
    name: 'Fruits and Vegetables',
    description: 'Fresh, farm-picked produce',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF06Gl73e-tO46peGszUQ7iCoiGlVMrx3zEw&s',
    imageAlt: 'A variety of fresh fruits and vegetables including apples, bananas, tomatoes, and leafy greens.',
    href: '#',
  },
  {
    name: 'Staples',
    description: 'Rice, pulses, and flour essentials',
    imageSrc: 'https://sweetinstitute.com/wp-content/uploads/2024/04/Depositphotos_301345046_S.jpg',
    imageAlt: 'An assortment of rice, wheat flour, and lentils stacked together.',
    href: '#',
  },
  {
    name: 'Spices and Masalas',
    description: 'Authentic Indian spices for your kitchen',
    imageSrc: 'https://ihmnotessite.com/wp-content/uploads/2020/07/general_544923805.jpg',
    imageAlt: 'A collection of Indian spices like turmeric, cumin, coriander, and garam masala.',
    href: '#',
  },
  {
    name: 'Beverages',
    description: 'Tea, coffee, and health drinks',
    imageSrc: 'https://www.fundacionmapfre.org/media/blog/cafe-1194x585-1.jpg',
    imageAlt: 'A cup of tea and coffee with some health drink options.',
    href: '#',
  },
  {
    name: 'Snacks and Sweets',
    description: 'Tasty snacks and traditional Indian sweets',
    imageSrc: 'https://www.foodanddrinktechnology.com/wp-content/uploads/sweets_snacks.jpg',
    imageAlt: 'A variety of Indian snacks like chips, namkeen, and traditional sweets like ladoos.',
    href: '#',
  },
  {
    name: 'Dairy Products',
    description: 'Milk, cheese, curd, and more',
    imageSrc: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg',
    imageAlt: 'Milk, curd, butter, and various cheese varieties.',
    href: '#',
  },
  {
    name: 'Frozen Foods',
    description: 'Frozen meals and snacks for convenience',
    imageSrc: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/08/07/Pictures/_a7527634-9a2c-11e8-9ea4-7619ca404631.jpg',
    imageAlt: 'Frozen food items like parathas, nuggets, and ready-to-cook meals.',
    href: '#',
  },
  {
    name: 'Health and Wellness',
    description: 'Organic, gluten-free, and health-conscious products',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GGQY-mQALfH7MebB-OOPHJiCcByIHgQRTA&s',
    imageAlt: 'A collection of health supplements, organic products, and wellness drinks.',
    href: '#',
  },
  {
    name: 'Packaged Foods',
    description: 'Ready-to-eat, packed meals, and convenience foods',
    imageSrc: 'https://www.p5pkg.com/wp-content/uploads/ready-meal-packaging-collection-1.webp',
    imageAlt: 'Packaged snacks, instant noodles, and ready-to-cook meals.',
    href: '#',
  },
  {
    name: 'Personal Care',
    description: 'Toiletries, skincare, and hygiene products',
    imageSrc: 'https://www.heinens.com/content/uploads/2022/08/Heinens-Health-And-Beauty-products-800x550-1.jpg',
    imageAlt: 'Toothpaste, soap, shampoo, and skincare products.',
    href: '#',
  },
  {
    name: 'Household Essentials',
    description: 'Cleaning supplies, utensils, and more',
    imageSrc: 'https://assets.epicurious.com/photos/63cec86849e8e01f44f25b56/16:9/w_2560%2Cc_limit/xx-products-spring-cleaning_HERO_041122_6935_VOG_Badge_final.jpg',
    imageAlt: 'Dishwashing liquid, cleaning supplies, and storage containers.',
    href: '#',
  },
];

export default function Categories() {
  return (
    <div className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-200 mb-10">Popular Grocery Categories</h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-white">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-400">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="mt-1 text-base font-semibold text-gray-200">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
