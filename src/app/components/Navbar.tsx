import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <span className="font-bold">LinkedIn Tone SaaS</span>
      <div className="space-x-4 flex items-center">
        <a href="/" className="hover:underline">Home</a>
        <a href="/dashboard" className="hover:underline">Dashboard</a>

        <SignedOut>
          <a href="/sign-in" className="hover:underline">Sign In</a>
          <a href="/sign-up" className="hover:underline">Sign Up</a>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
