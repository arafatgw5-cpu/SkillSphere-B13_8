"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Please login first</h1>
        <Link href="/login" className="btn btn-warning mt-4">
          Login
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-md mx-auto px-4 py-16 text-center">
      <img
        src={session.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
        alt="profile"
        className="w-32 h-32 rounded-full object-cover mx-auto"
      />

      <h1 className="text-3xl font-bold mt-4">{session.user.name}</h1>
      <p>{session.user.email}</p>

      <Link href="/my-profile/update" className="btn btn-warning mt-6">
        Update Information
      </Link>
    </section>
  );
}