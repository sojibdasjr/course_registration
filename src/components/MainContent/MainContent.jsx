import React, { useState } from "react";
import CourseContent from "../CourseContent/CourseContent";
import CourseCart from "../CourseCart/CourseCart";

const MainContent = () => {
  const [cartCourse, setCartCourse] = useState([]);
  const [courseCredit, setCourseCredit] = useState(0);
  const [remainingCredit, setremainingCredit] = useState(20);
  const handleCourseCart = (course) => {
    const newCourse = [...cartCourse, course];
    setCartCourse(newCourse);
  };
  const handlecredit = (credit) => {
    const newCredit = courseCredit + credit;
    setCourseCredit(newCredit);
    // caredit remaining
    const remaining = newCredit;
    const newRem = 20 - remaining;
    setremainingCredit(newRem);
  };
  return (
    <div className="md:flex gap-4 max-w-7xl mx-auto mt-4 px-2">
      <CourseContent
        handleCourseCart={handleCourseCart}
        handlecredit={handlecredit}
      />
      <CourseCart
        cartCourse={cartCourse}
        courseCredit={courseCredit}
        remainingCredit={remainingCredit}
      />
    </div>
  );
};

export default MainContent;
