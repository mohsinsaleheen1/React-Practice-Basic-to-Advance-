import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const Form = () => {
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name must be require",
          })}
        />
        {errors.name && <p className="error">{errors.name?.message}</p>}
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email must be require",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Invalid Email Address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email?.message}</p>}
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: "Age must be require",
            min: {
              value: 18,
              message: "Age must be at least 18",
            },
            max: {
              value: 25,
              message: "Age must be at most 25",
            },
          })}
        />
        {errors.age && <p className="error">{errors.age?.message}</p>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} placement="top-left" />
    </div>
  );
};

export default Form;
