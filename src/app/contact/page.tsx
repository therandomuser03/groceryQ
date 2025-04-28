'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8 min-h-screen relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-green-500 opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg text-gray-400">
          Have questions or need assistance with your grocery orders? We&apos;re here to help!
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-neutral-900 px-3.5 py-2 text-base text-white outline-none ring-1 ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-neutral-900 px-3.5 py-2 text-base text-white outline-none ring-1 ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-neutral-900 px-3.5 py-2 text-base text-white outline-none ring-1 ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-neutral-900 ring-1 ring-neutral-700 focus-within:ring-2 focus-within:ring-green-500">
                <div className="relative flex items-center">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="h-full rounded-l-md bg-neutral-900 px-3.5 text-base text-neutral-400 focus:outline-none"
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="01234567890"
                    maxLength={11}
                    pattern="\d*"
                    className="flex-1 rounded-r-md bg-neutral-900 px-3.5 py-2 text-base text-white placeholder:text-neutral-400 focus:outline-none"
                    onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                    }}
                  />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-neutral-900 px-3.5 py-2 text-base text-white outline-none ring-1 ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
                placeholder="Your message..."
              />
            </div>
          </div>

          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-neutral-700 p-px ring-1 ring-inset ring-white/10 transition-colors duration-200 ease-in-out data-checked:bg-green-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-400">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-green-400 hover:underline">
                privacy policy
              </a>.
            </Label>
          </Field>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  )
}
