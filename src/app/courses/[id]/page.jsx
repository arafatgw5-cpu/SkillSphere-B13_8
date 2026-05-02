import { getCourses } from "@/lib/getCourses";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;

  const courses = await getCourses();

  const course = courses.find(
    (item) => String(item.id) === String(id)
  );

  if (!course) {
    notFound();
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-base-200">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="badge badge-warning mb-3">{course.category}</p>

          <h1 className="text-4xl font-bold">{course.title}</h1>

          <div className="mt-4 space-y-2">
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Rating:</strong> ⭐ {course.rating}</p>
            <p><strong>Level:</strong> {course.level}</p>
          </div>

          <p className="mt-5 text-base-content/80">
            {course.description}
          </p>

          <button className="btn btn-warning mt-6">Enroll Now</button>
        </div>
      </div>

      <div className="mt-12 bg-base-100 shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>

        <ul className="space-y-3">
          <li className="p-3 bg-base-200 rounded-lg">1. Introduction to the Course</li>
          <li className="p-3 bg-base-200 rounded-lg">2. Core Concepts and Basics</li>
          <li className="p-3 bg-base-200 rounded-lg">3. Real World Practice</li>
          <li className="p-3 bg-base-200 rounded-lg">4. Final Project</li>
          <li className="p-3 bg-base-200 rounded-lg">5. Certificate Guidance</li>
        </ul>
      </div>
    </section>
  );
}