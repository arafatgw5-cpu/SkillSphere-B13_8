"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, User, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout successful");
    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    ...(session?.user ? [{ name: "My Profile", path: "/my-profile" }] : []),
  ];

  const linkClass = (path) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
      pathname === path
        ? "bg-orange-500 text-white shadow-md"
        : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md">
              <BookOpen size={22} />
            </div>
            <div>
              <h1 className="text-xl font-black leading-none text-gray-900">
                Skill<span className="text-orange-500">Sphere</span>
              </h1>
              <p className="text-[11px] text-gray-500 -mt-0.5">
                Learn • Grow • Succeed
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-gray-50 p-1 rounded-full border">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {isPending ? (
              <span className="loading loading-spinner loading-sm text-warning"></span>
            ) : session?.user ? (
              <>
                <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full pl-2 pr-4 py-1">
                  <img
                    src={session.user.image || "https://i.pravatar.cc/150"}
                    alt="user"
                    className="w-9 h-9 rounded-full object-cover border-2 border-white"
                  />
                  <span className="text-sm font-semibold text-gray-700 max-w-24 truncate">
                    {session.user.name || "User"}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none rounded-full"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn btn-sm rounded-full btn-outline">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn btn-sm rounded-full bg-orange-500 hover:bg-orange-600 text-white border-none"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="bg-white rounded-2xl shadow-lg border p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={linkClass(link.path)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t pt-3">
                {isPending ? (
                  <span className="loading loading-spinner loading-sm text-warning"></span>
                ) : session?.user ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-xl">
                      <img
                        src={session.user.image || "https://i.pravatar.cc/150"}
                        alt="user"
                        className="w-11 h-11 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-sm">
                          {session.user.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <User size={12} />
                          Logged in
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="btn bg-red-500 hover:bg-red-600 text-white border-none rounded-xl"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/login" onClick={() => setOpen(false)} className="btn btn-outline rounded-xl">
                      Login
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-xl"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;