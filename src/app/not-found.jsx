import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      {/* 404 Text */}
      <h1 className="text-7xl md:text-9xl font-bold text-orange-500">
        404
      </h1>

      {/* Message */}
      <p className="text-xl md:text-2xl font-semibold mt-4">
        Oops! Page not found 😢
      </p>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="btn bg-orange-500 text-white mt-6 hover:bg-orange-600"
      >
        ⬅ Back to Home
      </Link>

    </div>
  );
}