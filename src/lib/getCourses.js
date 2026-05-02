export async function getCourses() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/courses.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}