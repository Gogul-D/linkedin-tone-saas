"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <Link href="/" className="text-xl font-bold">LinkedIn Tone AI</Link>

      <div>
        <SignedOut>
          <Link
            href="/sign-in"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Sign In
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
