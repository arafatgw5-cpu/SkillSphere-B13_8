"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout successful");
    window.location.href = "/";
  };

  // 🔥 Active link style
  const linkClass = (path) =>
    `px-3 py-1 rounded-md transition ${
      pathname === path
        ? "text-orange-500 font-semibold bg-orange-100"
        : "hover:text-orange-500"
    }`;

  const links = (
    <>
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <Link href="/courses" className={linkClass("/courses")}>
        Courses
      </Link>
      <Link href="/my-profile" className={linkClass("/my-profile")}>
        My Profile
      </Link>
    </>
  );

  return (
    <nav className="bg-base-100 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="text-orange-500" />
          SkillSphere
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">

          {links}

          {/* Loading */}
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session?.user ? (
            <>
              {/* Avatar */}
              <img
                src={session.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
                className="w-9 h-9 rounded-full object-cover border"
                alt="user"
              />

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm bg-orange-500 text-white">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">

          {links}

          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session?.user ? (
            <>
              <img
                src={session.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
                className="w-10 h-10 rounded-full object-cover"
                alt="user"
              />

              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm bg-orange-500 text-white">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}