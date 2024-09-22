import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      {params.blogdetailId}
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta veniam
        quam animi harum distinctio, mollitia quisquam? Facere numquam earum
        atque.
      </p>
    </div>
  );
};

export default page;
