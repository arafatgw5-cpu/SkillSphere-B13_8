"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "sonner";

export default function RegisterPage() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const { error } = await authClient.signUp.email({
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      image: form.photo.value,
    });

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Registration successful");
    window.location.href = "/login";
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />

        <input
          name="photo"
          type="url"
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />

        <button className="btn btn-warning w-full">Register</button>
      </form>

      <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-4">
        Register with Google
      </button>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
}