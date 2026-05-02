"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      <input
        type="text"
        placeholder="Search course by title..."
        className="input input-bordered w-full mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}