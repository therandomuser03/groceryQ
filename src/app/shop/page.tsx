import Navbar from "@/components/Navbar";

const products = [
  {
    id: 1,
    name: 'Oranges',
    href: '#',
    price: '₹120/kg',
    imageSrc: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg',
    imageAlt: 'Fresh oranges on display.',
  },
  {
    id: 2,
    name: 'Pulses (Dal)',
    href: '#',
    price: '₹95/kg',
    imageSrc: 'https://chheda.store/wp-content/uploads/2020/12/MOONG-DAL-1.jpg',
    imageAlt: 'Various pulses in sacks.',
  },
  {
    id: 3,
    name: 'Dry Red Chillies',
    href: '#',
    price: '₹200/kg',
    imageSrc: 'https://rukminim2.flixcart.com/image/850/1000/kqgyhe80/spice-masala/6/t/o/red-chilli-whole-dry-red-chillies-whole-lal-mirch-sabut-original-imag4hge7dt8jjvn.jpeg?q=90&crop=false',
    imageAlt: 'Dry red chillies in a bag.',
  },
  {
    id: 4,
    name: 'Cumin Seeds (Jeera)',
    href: '#',
    price: '₹350/kg',
    imageSrc: 'https://organicmandya.com/cdn/shop/files/CuminSeed_2_77f965e6-ee76-46c6-9cf8-25b07eccf7ea.jpg?v=1738136291',
    imageAlt: 'Heap of cumin seeds.',
  },
  {
    id: 5,
    name: 'Mustard Seeds',
    href: '#',
    price: '₹90/kg',
    imageSrc: 'https://organicmandya.com/cdn/shop/files/MustardSeed_329c2107-12f1-4924-b1cd-8ba6a48c8dce.jpg?v=1745470122&width=1000',
    imageAlt: 'Mustard seeds packed in a sack.',
  },
  {
    id: 6,
    name: 'Cauliflower',
    href: '#',
    price: '₹45/piece',
    imageSrc: 'https://www.jiomart.com/images/product/original/590000619/cauliflower-1-pc-approx-300-g-500-g-product-images-o590000619-p590000619-0-202411061152.jpg?im=Resize=(420,420)',
    imageAlt: 'Fresh cauliflowers.',
  },
  {
    id: 7,
    name: 'Green Vegetables Combo',
    href: '#',
    price: '₹250/combo',
    imageSrc: 'https://m.media-amazon.com/images/I/91vjv8TkVOL.jpg',
    imageAlt: 'Mixed fresh green vegetables.',
  },
  {
    id: 8,
    name: 'Bottle Gourd (Lauki)',
    href: '#',
    price: '₹40/kg',
    imageSrc: 'https://fruitboxco.com/cdn/shop/products/bottle-gourd1.jpg?v=1643139528',
    imageAlt: 'Fresh bottle gourds.',
  },
  {
    id: 9,
    name: 'Rice',
    href: '#',
    price: '₹55/kg',
    imageSrc: 'https://organicmandya.com/cdn/shop/files/Basmathirice_da3413e4-36cc-4888-884c-f36a3110ead5.jpg?v=1745405933&width=1000',
    imageAlt: 'Heap of rice grains.',
  },
  {
    id: 10,
    name: 'Turmeric Root',
    href: '#',
    price: '₹150/kg',
    imageSrc: 'https://5.imimg.com/data5/IOS/Default/2023/11/362318178/PP/HG/PC/144194230/product-jpeg-500x500.png',
    imageAlt: 'Bright yellow turmeric roots.',
  },
  {
    id: 11,
    name: 'Green Chillies',
    href: '#',
    price: '₹80/kg',
    imageSrc: 'https://www.speedokart.com/images/products/17117108810_large.webp',
    imageAlt: 'Green chillies in bunches.',
  },
  {
    id: 12,
    name: 'Brinjal',
    href: '#',
    price: '₹60/kg',
    imageSrc: 'https://m.media-amazon.com/images/I/51XBbkVrvWL._AC_UF1000,1000_QL80_.jpg',
    imageAlt: 'Fresh purple brinjals.',
  },
  {
    id: 13,
    name: 'Red Onions',
    href: '#',
    price: '₹35/kg',
    imageSrc: 'https://cdn.shopify.com/s/files/1/1375/4957/files/blog_img_6.jpg?v=1573206246',
    imageAlt: 'Heap of red onions.',
  },
  {
    id: 14,
    name: 'Cluster Beans (Guar)',
    href: '#',
    price: '₹70/kg',
    imageSrc: 'https://m.media-amazon.com/images/I/71USHeBqReL._AC_UF1000,1000_QL80_.jpg',
    imageAlt: 'Fresh green cluster beans.',
  },
  {
    id: 15,
    name: 'Apples',
    href: '#',
    price: '₹150/kg',
    imageSrc: 'https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg',
    imageAlt: 'Fresh apples.',
  },
  {
    id: 16,
    name: 'Garlic',
    href: '#',
    price: '₹300/bunch',
    imageSrc: 'https://m.media-amazon.com/images/I/71vpJSiNYeL._AC_UF1000,1000_QL80_.jpg',
    imageAlt: 'Fresh garlics.',
  },
  {
    id: 17,
    name: 'Fresh Turmeric Powder',
    href: '#',
    price: '₹250/kg',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtF9rFcBF-W37lKVs2NyvnNLPQfO3sMmmIoQ&s',
    imageAlt: 'Turmeric powder heap.',
  },
  {
    id: 18,
    name: 'Salt',
    href: '#',
    price: '₹20/kg',
    imageSrc: 'https://assets.clevelandclinic.org/transform/1dbde386-78f5-41ad-8103-f8463950b0ea/spoonful-salt-sitting-tabletop-1051727580',
    imageAlt: 'Heap of white salt.',
  },
  {
    id: 19,
    name: 'Flour',
    href: '#',
    price: '₹25/kg',
    imageSrc: 'https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg',
    imageAlt: 'Fine flour.',
  },
  {
    id: 20,
    name: 'Fresh Eggs',
    href: '#',
    price: '₹6/egg',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZs90ucGRjgpxji5kYPZYjcWtJDLDph3XTog&s',
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

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-46 aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-400">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-200">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
