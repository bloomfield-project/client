import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";

function FormData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div class="p-3 mb-2 bg-white text-dark">
      <form class="w-75 p-3 border border-secondary rounded">
        <div class="form-group">
          <label for= "first name" className="d-flex justify-content-start">
            First Name
          </label>
          
          <input {...register("firstName") } type="text"
            class="form-control"
            // id={item.id}
            aria-describedby="emailHelp"
            placeholder= "first name" />
        </div>
        <br></br>
      </form>
    </div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <label>First Name</label>
    //   <input {...register('firstName')} />
    //   <input {...register('lastName', { required: true })} />
    //   {errors.lastName && <p>Last name is required.</p>}
    //   <input {...register('age', { pattern: /\d+/ })} />
    //   {errors.age && <p>Please enter number for age.</p>}
    //   <input type="submit" />
    // </form>
  );
}

export default FormData;

// type="text"
// class="form-control"
// id="exampleInputEmail1"
// aria-describedby="emailHelp"
// placeholder="First Name"
