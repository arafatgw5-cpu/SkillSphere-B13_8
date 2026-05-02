"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message || "Update failed");
    } else {
      toast.success("Profile updated successfully");
      router.push("/my-profile");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Update Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input name="name" placeholder="New Name" className="input input-bordered w-full" required />
        <input name="image" placeholder="New Image URL" className="input input-bordered w-full" required />
        <button className="btn btn-warning w-full">
          Update Information
        </button>
      </form>
    </div>
  );
}