import React from "react";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" flex justify-around items-center py-[100px] px-44  border-2 rounded">
      <div className="">
        <h2 className="text-6xl font-bold ">Books to freshen up your bookshelf</h2>
        <p className="text-xl text-gray-500 my-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          necessitatibus quasi aliquam aut quas. Enim.
        </p>
        <button className="btn btn-success">
          <Link to="/books">View the List</Link>
        </button>
      </div>
      <div>
        <img className="w-[1100px]" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
