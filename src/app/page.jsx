import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/courses.json`, {
    cache: "no-store",
  });

  const courses = await res.json();

  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const trendingCourses = courses.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">🔥 Popular Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">🚀 Trending Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}