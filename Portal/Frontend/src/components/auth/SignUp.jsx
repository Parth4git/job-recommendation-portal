import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { User_API_ENDPOINT } from "../utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
// Import the correct loading action
import { Button } from "../ui/button"; // Make sure to import Button component
// import { Loader2 } from "react-icons"; // Adjust if Loader2 is from a different library

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    profilePhoto: "",
  });

  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setInput((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("profilePhoto", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${User_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-200 p-4 rounded-md my-10"
        >
          <h1 className="text-3xl font-bold text-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            Sign Up
          </h1>
          <div className="flex flex-col gap-2 px-2 py-3">
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              value={input.fullname}
              name="fullname"
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2 px-2 py-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={input.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2 px-2 py-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex flex-col gap-2 px-2 py-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={input.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col gap-2 px-2 py-2">
            <Label>Role</Label>
            <RadioGroup
              value={input.role}
              onValueChange={(value) =>
                setInput((prev) => ({ ...prev, role: value }))
              }
              className="flex flex-row gap-6"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="recruiter"
                  value="recruiter"
                  name="role"
                  checked={input.role === "recruiter"}
                  onChange={handleChange}
                  className="cursor-pointer w-4 h-4"
                />
                <Label htmlFor="recruiter" className="text-sm">
                  Recruiter
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="job-seeker"
                  value="job-seeker"
                  name="role"
                  checked={input.role === "job-seeker"}
                  onChange={handleChange}
                  className="cursor-pointer w-4 h-4"
                />
                <Label htmlFor="job-seeker" className="text-sm">
                  Job Seeker
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-2 px-2 py-2">
            <Label htmlFor="file">Profile Picture</Label>
            <Input
              type="file"
              id="file"
              accept="image/*"
              className="cursor-pointer w-1/2"
              onChange={handleFileChange}
              name="profilePhoto"
            />
          </div>

          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <div className="flex flex-col gap-3 py-4">
              <button
                type="submit"
                className="w-full h-10 bg-blue-500 text-white p-1 rounded-md text-sm"
              >
                Sign Up
              </button>
            </div>
          )}

          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
