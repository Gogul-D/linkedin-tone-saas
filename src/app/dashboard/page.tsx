import { currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    return <div>Please log in to see your dashboard.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome, {user.firstName}!</h1>
      <p className="mt-4 text-gray-600">This is your private dashboard.</p>
    </div>
  );
}
