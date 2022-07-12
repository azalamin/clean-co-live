import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";

const AddService = () => {
  const [imgURL, setImgURL] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      imgURL: imgURL,
    };
    const res = await fetcher.post("/add-service", serviceData);
    console.log(res);
    reset();
    setImgURL("");
  };

  const handleUploadImage = (event) => {
    setLoading(true);
    const image = event.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    const key = "52615529fc784d6bcf37f81d22cb4827";
    axios
      .post(`https://api.imgbb.com/1/upload?key=${key}`, formData)
      .then((res) => {
        console.log(res);
        setImgURL(res.data?.data?.url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-center mt-5 text-3xl font-bold ">
          Add New Service
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Charge</span>
              </label>
              <input
                type="number"
                placeholder="Charge"
                className="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="image"
                disabled={imgURL ? true : false}
                className={`btn uppercase text-white btn-primary btn-md mt-3 ${
                  loading ? "loading" : ""
                }`}
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                className="input input-bordered hidden"
                onChange={handleUploadImage}
              />
            </div>
            <div className="form-control mt-6">
              <button
                disabled={imgURL ? false : true}
                type="submit"
                className="btn btn-primary"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
