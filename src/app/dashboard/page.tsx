// app/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server"; // ✅ IMPORTANT: Use `/server`

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-red-500">
          Please log in to see your dashboard.
        </h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome, {user.firstName || "User"}!</h1>
      <p className="mt-4 text-gray-600">
        This is your private dashboard where you can generate LinkedIn posts in your natural tone.
      </p>
    </div>
  );
}
