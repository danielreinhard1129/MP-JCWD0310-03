"use client";
import useLogin from "@/hooks/api/admin-auth/useLogin";
import { useFormik } from "formik";
import { Key, Mail } from "lucide-react";
import { validationSchema } from "./validationSchema";

const Login = () => {
  const { login } = useLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        login(values);
      } catch (error) {
        console.error("Registration error:", error);
      } finally {
        alert("Sukses login");
      }
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden h-full items-center justify-center rounded-r-2xl bg-[#1F1F95] md:block md:flex">
        <h1 className="mx-auto text-2xl font-bold text-white">EVENTIFY.</h1>
      </div>
      <div className="h-[600px] max-w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto flex h-full max-w-[500px] flex-col justify-center space-y-5 px-10"
        >
          <h1 className="text-xl font-bold md:py-5">Sign in</h1>

          <div className="space-y-2">
            <h1 className="text-[15px] font-semibold">Email</h1>
            <label className="input input-bordered flex h-[40px] items-center gap-2 rounded-lg">
              <Mail color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <h1 className="text-[15px] font-semibold">Password</h1>
            <label className="input input-bordered flex h-[40px] items-center gap-2 rounded-lg">
              <Key color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <button
            className="btn w-full rounded-lg bg-[#1F1F95] text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
