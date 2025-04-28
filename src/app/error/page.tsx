import { Globe } from "@/components/magicui/globe";
import Link from "next/link";

export default function Error() {
  return (
    <>
      {/* Ensure that html and body elements take up full height */}
      <html className="h-full bg-neutral-950">
        <body className="h-full bg-neutral-950">
          <main className="grid h-full place-items-center bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
            <div className="relative text-center items-center z-10">
              {/* Position the globe in the background with a lower z-index */}
              <Globe className="absolute inset-0 z-[-1] filter invert" />
              
              <p className="text-base font-semibold text-neutral-300 pb-26">Error 404</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-neutral-200 sm:text-7xl">
                Page not found
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <Link
                  href="/"
                  className="rounded-md bg-transparent border border-neutral-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back Home
                </Link>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
