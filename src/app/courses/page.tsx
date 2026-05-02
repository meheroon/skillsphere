"use client";

import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import { courses } from "@/data/courses";
import { useState } from "react";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-custom py-12">
      <SectionTitle
        title="All Courses"
        subtitle="Search and explore all available courses from SkillSphere."
      />

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search course by title..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-center text-red-500 font-medium">No courses found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}