import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const cloudAPI = "dk0cl9vtx";
  const [visible, setVisible] = useState(false);

  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = (date) => {
    const dateObj = new Date(date);
    const updatedDate = dateObj.toLocaleDateString("en-US", options);
    return updatedDate;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    toast.loading("Updating");
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "product Image");
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`,
        formData
      )
      .then(async (res) => {
        const imageUrl = res.data.secure_url;
        toast.dismiss();

        await axios
          .post(
            `/updateProfile/${user._id}`,
            {
              name,
              email,
              phone,
              address,
              gender,
              imageUrl,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            if (response) {
              toast.success("Updated  Successfully");
              setVisible(false);
            }
          })
          .catch((error) => {
            if (error.response) {
              toast.error(error.response.data.error);
            } else {
              toast.error(error.message);
            }
          });
      });
  };

  const getProfile = () => {
    axios
      .get("/getProfile", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        let userData = response.data.userData;

        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
        setImage(userData.imageUrl);
        setPhone(userData.phone);
        setGender(userData.gender);
        setAddress(userData.address);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error(error.message);
        }
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="bg-emerald-100">
      <a class="relative block overflow-hidden rounded-lg border border-gray-100 px-20 sm:p-6 lg:p-20">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 ">{user.name}</h3>

            <p class="mt-1 text-sm font-medium text-gray-600">
              {user.profession}
            </p>
          </div>

          <div class="hidden sm:block sm:shrink-0">
            {user.imageUrl === "Not added" ? (
              <img
                alt="Paul Clapton"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="h-40 w-40 rounded-lg object-cover shadow-sm"
              />
            ) : (
              <img
                alt="Paul Clapton"
                src={user.imageUrl}
                class="h-40 w-40 rounded-lg object-cover shadow-sm"
              />
            )}
          </div>
        </div>

        <div>
          <span>Orders Completed : </span>
          <span className="text-green-600 font-bold"> {user.Rentings}</span>
        </div>
        <div>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>

        <div class="mt-4"></div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Joined</dt>
            <dd class="text-xs text-gray-500">{formattedDate(user.joined)}</dd>
          </div>
        </dl>
        <div class="my-4 flex ">
          <div class="w-1/2 flex flex-col 2xl:w-1/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul class="mt-2 text-gray-700">
                <li class="flex border-y py-2">
                  <span class="font-bold w-24">Full name:</span>
                  <span class="text-gray-700">{user.name}</span>
                </li>
                <li class="flex border-y py-2">
                  <span class="font-bold w-24"> Rentings:</span>
                  <span class="text-green-600 font-bold ">{user.Rentings}</span>
                </li>

                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Joined:</span>
                  <span class="text-gray-700">
                    {formattedDate(user.joined)}
                  </span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Mobile:</span>
                  <span class="text-gray-700">{user.phone}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Email:</span>
                  <span class="text-gray-700">{user.email}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Location:</span>
                  <span class="text-gray-700">Kerala</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Gender:</span>
                  {user.gender === "Not added" ? (
                    <button
                      onClick={() => {
                        setVisible(true);
                      }}
                      class="text-gray-700 bg-green-400 p-2"
                    >
                      {" "}
                      Add
                    </button>
                  ) : (
                    <span class="text-gray-700"> {user.gender}</span>
                  )}
                </li>

                <li class="flex items-center border-b py-2 space-x-2">
                  <span class="font-bold w-24">Address:</span>
                  {user.address === "Not added" ? (
                    <button
                      onClick={() => {
                        setVisible(true);
                      }}
                      class="text-gray-700 bg-green-400 p-2"
                    >
                      {" "}
                      Add
                    </button>
                  ) : (
                    <span class="text-gray-700">{user.address}</span>
                  )}
                </li>
              </ul>
              { user.imageUrl !== "Not added" &&

              <div className="flex justify-end mt-3">
                <button
                onClick={()=> {
                    setVisible(true)
                }}
                 className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-sky-300 rounded-md hover:bg-emerald-700 focus:outline-none focus:bg-gray-600">Edit </button>
              </div>
              }
            </div>
          </div>

          <div className="ml-8 w-1/2">
            <section
              className={`  p-6 mx-auto bg-indigo-600 ${
                visible ? "visible" : "invisible"
              }  rounded-md shadow-xl dark:bg-gray-800 `}
            >
              <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                Profile settings
              </h1>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setVisible(false);
                  }}
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg- focus:outline-none focus:bg-gray-600"
                >
                  Close
                </button>
              </div>
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-white">
                      Profile
                    </label>
                    <div className=" flex justify-center px-3  pb-4 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <div className="flex justify-center">
                          {image && (
                            <img
                              class="w-20 border-4 border-white rounded-full"
                              src={image}
                              alt="notget"
                            />
                          )}
                        </div>
                        <div className="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span className="">Upload your photo</span>
                            <input
                              required
                              onChange={(e) => {
                                setImage(e.target.files[0]);
                              }}
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="number"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="number"
                      type="Text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Phone
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      id="number"
                      type="Text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Gender
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>General</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      ADDRESS
                    </label>
                    <textarea
                      required
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      id="textarea"
                      type="textarea"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-emerald-300 rounded-md hover:bg-emerald-700 focus:outline-none focus:bg-gray-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Profile;
