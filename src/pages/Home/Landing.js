import React from "react";
import bucketGirl from "../../assets/image/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div className="hero min-h-[60vh] bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              className="text-5xl font-bold"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
              className="py-6 max-w-xl"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1300"
              data-aos-duration="1000"
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh shrink-0">
            <img src={bucketGirl} className="h-full" alt="" />
          </div>
        </div>
      </div>
      <div className="p-10 shadow-xl w-5/6 mt-[-50px] mx-auto bg-base-200 relative z-50 rounded-2xl">
        <h1 className="text-3xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;
