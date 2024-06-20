"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import React from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Graphics from "@/components/component/Graphics";
import { redirect } from "next/navigation";
import GraphicsIcon from "@/components/component/GraphicsIcon";
import GraphicsText from "@/components/component/GraphicsText";

import type { RootState } from "@/app/lib/store";
import { useDispatch } from "react-redux";
import { setEmail } from "@/app/lib/emailSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

// Icon
import signInImage from "@/public/icons/user-plus.png";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  type formSchema = {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
  };

  const form = useForm<formSchema>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: formSchema) => {
    console.log(data);
    dispatch(setEmail(data.email));

    axios
      .post(
        "https://learn-nodejs-qkio.onrender.com/api/v1/user/register",
        {
          fullName: `${data.firstName} ${data.lastName}`,
          email: data.email,
          password: data.password,
        },     
      )
      .then((res) => {
        console.log(res);
        router.push("/verify-account");
      })
      .catch((err) => console.log(err));
   
  };

  return (
    <div className="h-screen w-screen flex flex-row items-center gap-2">
      {/* Login div */}
      <div className="w-[50%] bg-[#FFFFFF] h-full px-[140px] py-[0px]">
        <div className="my-[35px] flex flex-col gap-0">
          <div className="mb-[10px] space-y-2">
            <h1 className="font-semibold text-3xl ">Sign In</h1>
            <p className="text-[#4B5563] text-sm leading-7 font-normal">
              Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
              langsung jadi deh!
            </p>
          </div>

          {/* Login Form */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px]"
          >
            {/* Name div */}
            <div className="flex gap-[10px]">
              <FormItem>
                <Label className="font-semibold">Your Name</Label>

                <Input
                  className="h-[55px]"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: true,
                    maxLength: 15,
                    minLength: 2,
                  })}
                />
                {errors.firstName && (
                  <Label className="text-sm font-medium text-destructive">
                    Fill First Name
                  </Label>
                )}
              </FormItem>

              <FormItem>
                <Label className="font-semibold text-transparent">
                  last Name
                </Label>
                <Input
                  className="h-[55px]"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: true,
                    minLength: 2,
                    maxLength: 15,
                  })}
                />
                {errors.lastName && (
                  <Label className="text-sm font-medium text-destructive">
                    Fill Last Name
                  </Label>
                )}
              </FormItem>
            </div>

            <FormItem>
              <Label className="font-semibold">Email</Label>

              <Input
                className="h-[55px]"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  minLength: 2,
                })}
              />
              {errors.email && (
                <Label className="text-sm font-medium text-destructive">
                  Fill Email
                </Label>
              )}
            </FormItem>

            <FormItem>
              <Label className="font-semibold">Password</Label>

              <Input
                className="h-[55px]"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 4,
                  maxLength: 10,
                })}
              />
              {errors.password && (
                <Label className="text-sm font-medium text-destructive">
                  Fill password
                </Label>
              )}
            </FormItem>
            <p className="text-[#4B5563] text-sm leading-7 font-normal">
              Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
              langsung jadi deh!
            </p>

            <Button
              type="submit"
              className="bg-[#4F46E5] hover:bg-[#443be3] h-[59px]"
            >
              Sign In
            </Button>
          </form>
        </div>

        <p className="text-center font-semibold text-[#4B5563]">
          Already have an account?{" "}
          <Link className="text-[#4F46E5] " href="/login">
            Login!
          </Link>
        </p>
      </div>

      {/* Image div */}
      <Graphics>
        <GraphicsIcon image={signInImage} />
        <GraphicsText textContent="Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan nggak jadi beban kayak si Denis!" />
      </Graphics>
    </div>
  );
};

export default SignUp;
