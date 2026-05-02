import ProtectedRoute from "@/components/ProtectedRoute";
import { courses } from "@/data/courses";
import { notFound } from "next/navigation";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    notFound();
  }

  return (
    <ProtectedRoute>
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <img
            src={`${course.image}?auto=format&fit=crop&w=1000&q=80`}
            alt={course.title}
            className="rounded-3xl shadow-lg w-full h-[420px] object-cover"
          />

          <div className="bg-white p-8 rounded-3xl shadow">
            <span className="badge badge-warning mb-4">{course.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
            <p className="mt-4 text-slate-600">{course.description}</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <p><b>Instructor:</b> {course.instructor}</p>
              <p><b>Duration:</b> {course.duration}</p>
              <p><b>Rating:</b> ⭐ {course.rating}</p>
              <p><b>Level:</b> {course.level}</p>
            </div>

            <button className="btn bg-orange-500 text-white mt-8 w-full">
              Enroll Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 mt-10">
          <h2 className="text-2xl font-bold mb-5">Course Curriculum</h2>
          <ul className="space-y-3">
            {course.curriculum.map((item, index) => (
              <li key={item} className="p-4 bg-orange-50 rounded-xl">
                Module {index + 1}: {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProtectedRoute>
  );
}