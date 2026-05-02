import Link from "next/link";

type Course = {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  level: string;
  category: string;
  image: string;
  description: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden">
      <figure>
        <img
          src={`${course.image}?auto=format&fit=crop&w=900&q=80`}
          alt={course.title}
          className="h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between text-sm">
          <span className="badge badge-warning">{course.category}</span>
          <span>⭐ {course.rating}</span>
        </div>
        <h2 className="card-title text-xl">{course.title}</h2>
        <p className="text-sm text-slate-600">Instructor: {course.instructor}</p>
        <p className="text-sm text-slate-600">
          {course.duration} • {course.level}
        </p>
        <div className="card-actions justify-end mt-3">
          <Link href={`/courses/${course.id}`} className="btn bg-orange-500 text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}