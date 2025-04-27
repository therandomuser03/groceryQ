import Navbar from '@/components/Navbar'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter Basket',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '₹399',
    description: "Perfect for individuals or small households ordering essentials.",
    features: [
      'Up to 20 grocery items per order',
      '2 free deliveries per month',
      'Exclusive member-only discounts',
      'Priority support within 48 hours',
    ],
    featured: false,
  },
  {
    name: 'Family Feast',
    id: 'tier-family',
    href: '#',
    priceMonthly: '₹799',
    description: 'Ideal for families needing regular and larger grocery orders.',
    features: [
      'Up to 60 grocery items per order',
      'Unlimited free deliveries',
      'Exclusive family bundles and offers',
      'Priority support within 24 hours',
      'Monthly gift hampers',
    ],
    featured: false,
  },
  {
    name: 'GroceryQ Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '₹1299',
    description: 'For foodies, large families, and those who want the best experience.',
    features: [
      'Unlimited grocery items per order',
      'Unlimited free deliveries + express delivery',
      'Special access to premium products',
      'Dedicated grocery specialist support',
      'Seasonal surprise boxes',
      'Early access to new products',
    ],
    featured: true,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div>
      <Navbar />
    <div className="relative isolate bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-green-600">Plans & Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-200 sm:text-6xl">
          Fresh groceries, flexible plans
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
        Whether you're shopping for yourself or your whole family, we have a plan that's perfect for you!
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-green-900 shadow-2xl' : 'bg-white sm:mx-4 lg:mx-2',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:mx-2',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-green-300' : 'text-green-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-green-300' : 'text-green-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-green-500 text-white shadow-xs hover:bg-green-400 focus-visible:outline-green-500'
                  : 'text-green-600 ring-1 ring-green-200 ring-inset hover:ring-green-300 focus-visible:outline-green-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Subscribe Now
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
