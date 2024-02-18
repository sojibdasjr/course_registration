import React from "react";
import CourseContent from "../CourseContent/CourseContent";
import CourseCart from "../CourseCart/CourseCart";

const MainContent = () => {
  return (
    <div className="flex gap-4 max-w-7xl mx-auto mt-4">
      <CourseContent />
      <CourseCart />
    </div>
  );
};

export default MainContent;
