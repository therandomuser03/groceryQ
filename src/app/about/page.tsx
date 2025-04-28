import React from 'react';
import about from '../../../public/assets/about.webp';
import founder from '../../../public/assets/about/founder.png';
import cofounder from '../../../public/assets/about/co-founder.jpg';
import survey from '../../../public/assets/about/survey.jpg';

function AboutSection() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col md:flex-row">
      {/* Image container */}
      <div className="md:w-1/2">
        <img 
          src={about.src} 
          alt="Father and daughter shopping for bread in a grocery store" 
          className="w-full h-auto max-h-100 object-cover"
        />
      </div>
      
      {/* Content container */}
      <div className="md:w-1/2 p-12 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6">About Grocery Q</h2>
        
        <h3 className="text-xl font-medium mb-4">How We Got Here</h3>
        
        <p className="mb-8">
          Since our first day in business, Grocery Q has been offering our 
          customers the best selection of products at unbeatable prices. Our 
          online store has become synonymous with quality and we ensure a 
          continuous variety of fantastic merchandise along with unique limited 
          edition and seasonal items that fit any budget. Check it out and start 
          shopping today!
        </p>
        
        <div>
          <button className="rounded-md border bg-transparent border-neutral-600 px-8 py-3 text-center font-medium text-white hover:bg-neutral-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

// Modified Example component to include the About Section
export default function Example() {
  const people = [
    {
      name: 'Shrestha Das',
      role: 'Founder',
      imageUrl: founder.src,
    },
    {
      name: 'Sayan Snigdha Pal',
      role: 'Co-Founder',
      imageUrl: cofounder.src,
    },
    {
      name: 'Anubhab Pal',
      role: 'Survey Manager',
      imageUrl: survey.src,
    },
  ];

  return (
    <>
      {/* About section added above the leadership section */}
      <AboutSection />
      
      {/* Original leadership section */}
      <div className="bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-200">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-green-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}