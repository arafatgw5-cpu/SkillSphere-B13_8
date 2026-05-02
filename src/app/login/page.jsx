"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const { error } = await authClient.signIn.email({
      email: form.email.value,
      password: form.password.value,
    });

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    toast.success("Login successful");
    window.location.href = callbackURL;
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL,
    });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />

        <button className="btn btn-warning w-full">Login</button>
      </form>

      <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-4">
        Login with Google
      </button>

      <p className="mt-4 text-center">
        New here?{" "}
        <Link href="/register" className="text-orange-500 font-semibold">
          Register
        </Link>
      </p>
    </div>
  );
}