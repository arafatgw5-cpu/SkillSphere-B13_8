"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout successful");
    window.location.href = "/";
  };

  const links = (
    <>
      <Link href="/">Home</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/my-profile">My Profile</Link>
    </>
  );

  return (
    <nav className="bg-base-100 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="text-orange-500" />
          SkillSphere
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links}

          {session?.user ? (
            <>
              <img
                src={session.user.image || "/default-avatar.png"}
                className="w-9 h-9 rounded-full object-cover"
                alt="user"
              />
              <button onClick={handleLogout} className="btn btn-sm btn-error">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm btn-warning">
                Register
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {links}
          {session?.user ? (
            <button onClick={handleLogout} className="btn btn-sm btn-error">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm btn-warning">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}