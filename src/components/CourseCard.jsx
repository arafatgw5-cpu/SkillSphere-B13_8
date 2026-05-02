import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image
          src={course.image}
          alt={course.title}
          width={500}
          height={300}
          className="h-52 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <span className="badge badge-warning">{course.category}</span>
        <h2 className="card-title">{course.title}</h2>
        <p>Instructor: {course.instructor}</p>
        <p>⭐ {course.rating}</p>

        <div className="card-actions justify-end">
          <Link href={`/courses/${course.id}`} className="btn btn-warning">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}