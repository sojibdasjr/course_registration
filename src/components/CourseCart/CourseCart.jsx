import React, { useState } from "react";
import { toast } from "react-toastify";

const CourseCart = ({
  cartCourse,
  courseCredit,
  remainingCredit,
  oldPrice,
}) => {
  if (remainingCredit < 0) {
    remainingCredit = 0;
    toast.error("You have no more Credit");
    //call disable function
  }

  return (
    <div className=" md:w-1/4  border ps-2 ">
      <h1 className="font-bold text-slate-700 text-2xl ">
        Credit Hour Remaining: {remainingCredit}
      </h1>
      <hr className="my-2" />
      <h1 className="text-2xl font-bold mb-4">Course Name</h1>
      <div>
        {cartCourse.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </div>
      <hr className="my-4" />
      <h1>Total Creadit Hour : {courseCredit} </h1>
      <hr className="my-4" />
      <h1>Total Price: $ {oldPrice} </h1>
    </div>
  );
};

export default CourseCart;
