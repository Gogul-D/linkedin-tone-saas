export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <span className="font-bold">LinkedIn Tone SaaS</span>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/dashboard" className="hover:underline">Dashboard</a>
      </div>
    </nav>
  );
}
