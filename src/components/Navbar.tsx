'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-transparent text-black rounded-2xl p-8 flex justify-between items-center">
      <div className="text-lg font-semibold">
        GroceryQ
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm hover:underline">
          Log in
        </Link>
        <Link
          href="/signup"
          className="rounded-md bg-gray-400 px-4 py-2 text-sm font-medium hover:bg-gray-500 transition"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
