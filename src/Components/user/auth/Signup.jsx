import React from "react";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { siginupValidation } from "../../../middlewares/validationHelper";

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      profession: "",
      phone: "",
      password: "",
    },
    validate: siginupValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      await axios
        .post("/sendOtp", values)
        .then(() => {
          toast.success("Registration successful");

          navigate("/otp", { replace: true });
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
        });
    },
  });

  return (
    <div>
      <div class=" flex  overflow-hidden   bg-[url('/src/assets/images/wallpaperflare.com_wallpaper.jpg')] px-20 pt-5 bg-cover items-center justify-start">
        <div class="bg-white opacity-80 rounded-md py-6 px-10 sm:max-w-md w-full ">
          <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Registration
          </div>
          <div class="">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  {...formik.getFieldProps("name")}
                  type="text"
                  required
                  class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
                  placeholder="Name "
                />
              </div>
              <div>
                <input
                  type="email"
                  {...formik.getFieldProps("email")}
                  required
                  class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
                  placeholder="Eamil Adress "
                />
              </div>

              <div>
                <select
                  {...formik.getFieldProps("profession")}
                  required
                  class="focus:outline-none border-b w-full pb-2 border-sky-400 text-gray-500 mb-8"
                >
                  <option value="Other"> Choose Profession</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Welder">Welder</option>
                  <option value="General">General</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <input
                  {...formik.getFieldProps("phone")}
                  type="phone"
                  required
                  class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                  placeholder="Phone "
                />
              </div>
              <div class="">
                <input
                  {...formik.getFieldProps("password")}
                  type="password"
                  required
                  class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                  placeholder="Password "
                />
              </div>
              <div class="flex">
                <input
                  type="checkbox"
                  required
                  class="border-sky-400 "
                  value=""
                />
                <div class="px-3 text-gray-500">
                  I accept terms & conditions
                </div>
              </div>
              <div class="flex justify-center my-6">
                <button
                  type="submit"
                  class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold "
                >
                  Create Account
                </button>
              </div>
              <div class="flex justify-center ">
                <p class="text-gray-500">Already have an acount? </p>

                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  class="text-sky-600 pl-2"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
