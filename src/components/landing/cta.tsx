import { Facebook, Twitter, Linkedin } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const links = [
  { name: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { name: "Twitter", href: "https://www.twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
];

export default function Cta() {
  return (
    <div className="relative isolate overflow-hidden bg-background mx-16 my-8 py-24 sm:py-32">
      <img
        alt=""
        src="/images/placeholders/hero3.png"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center rounded-2xl"
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
            <Button variant="secondary" asChild className="gap-2">
              <a href="mailto:contact@groceryq.com">
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
            </Button>
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
  );
}
