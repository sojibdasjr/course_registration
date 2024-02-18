import React from "react";

const SingleCourse = ({ content }) => {
  const { id, image, title, description, price, credit } = content;
  return (
    <div className=" border border-gray-300 mb-4 ">
      <div>
        <img
          className="md:w-80 md:h-54 p-2 rounded-2xl "
          src={image}
          alt={`course image ${title}`}
        />
        <h1> {title}</h1>
        <h1>{description}</h1>
      </div>
      <div>
        <h1>Price: {price}</h1>
        <h1>Credit: {credit}</h1>
      </div>
    </div>
  );
};

export default SingleCourse;
