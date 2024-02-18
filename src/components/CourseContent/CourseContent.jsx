import React, { useEffect, useState } from "react";
import SingleCourse from "../SingleCourse/SingleCourse";

const CourseContent = ({ handleCourseCart, handlecredit }) => {
  const [courseContents, setCourseContents] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourseContents(data));
  }, []);
  return (
    <div className="md:flex md:w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {courseContents.map((content) => (
          <SingleCourse
            handlecredit={handlecredit}
            handleCourseCart={handleCourseCart}
            content={content}
            key={content.id}
          ></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
