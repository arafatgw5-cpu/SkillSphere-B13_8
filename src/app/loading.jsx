export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-warning"></span>

      {/* Text */}
      <p className="text-lg font-semibold text-gray-600">
        Loading... Please wait ⏳
      </p>

    </div>
  );
}