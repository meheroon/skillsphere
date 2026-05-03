import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";
import { courses } from "../data/courses";
import Link from "next/link";


export default function HomePage() {
  const popularCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const trendingCourses = courses.slice(2, 5);

  return (
    <div>
      <section className="bg-gradient-to-br from-orange-100 via-white to-yellow-100">
        <div className="container-custom py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-600 font-semibold mb-3">Learn. Practice. Grow.</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Upgrade Your Skills Today 🚀
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Explore expert-led courses in development, design, marketing, data science, and career growth.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/courses" className="btn bg-orange-500 text-white">
                Explore Courses
              </Link>
              <Link href="/register" className="btn btn-outline border-orange-500 text-orange-600">
                Join Now
              </Link>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="students learning"
              className="rounded-2xl w-full h-[260px] sm:h-[340px] md:h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <SectionTitle
          title="Popular Courses"
          subtitle="Top-rated courses selected for learners who want practical career skills."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-custom">
          <SectionTitle
            title="Learning Tips"
            subtitle="Simple habits that help students complete online courses successfully."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Create a fixed study routine every day.",
              "Take notes after every lesson.",
              "Practice by building small real projects.",
            ].map((tip, index) => (
              <div key={index} className="p-6 rounded-2xl bg-orange-50 border">
                <h3 className="text-xl font-bold mb-2">Tip {index + 1}</h3>
                <p className="text-slate-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <SectionTitle
          title="Top Instructors"
          subtitle="Meet our expert mentors from different professional fields."
        />
        <div className="grid md:grid-cols-4 gap-6">
          {["John Doe", "Sarah Khan", "Nadia Islam", "Michael Lee"].map((name, index) => (
            <div key={name} className="bg-white p-6 rounded-2xl shadow text-center">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-slate-500 text-sm">Professional Instructor</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="container-custom">
          <SectionTitle
            title="Trending Courses"
            subtitle="Fresh and trending courses for modern learners."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}