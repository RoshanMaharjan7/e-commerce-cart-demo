"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Graphics from "@/components/component/Graphics";
import GraphicsIcon from "@/components/component/GraphicsIcon";
import GraphicsText from "@/components/component/GraphicsText";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

import lockImage from '@/public/icons/lock.png'

const Login = () => {
  const { toast } = useToast();
  const [formStatus, setFormStatus] = useState("idle");

  type formSchema = {
    email: String;
    password: String;
    rememberMe: Boolean;
  };

  // zod implementation
  const form = useForm<formSchema>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (data: formSchema) => {
  
    console.log(data);
    setFormStatus("submitting");

    axios
      .post("https://learn-nodejs-qkio.onrender.com/api/v1/user/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        setFormStatus("submitted");
        console.log(res);
        toast({
          description: "User Successfully Logged In",
        });
      })
      .catch((err) => {
        setFormStatus("submitted");
        console.log(err);
        toast({
          variant: "destructive",
          description: "Error Logging In",
        });
      });
  };

  return (
    <div className="h-screen w-screen flex flex-row items-center gap-2">
      {/* Login div */}
      <div className="w-[100%] lg:w-[50%] bg-[#FFFFFF] h-full px-[20px] py-[10px] lg:px-[140px] lg:py-[50px]">
        <div className="my-[35px] flex flex-col gap-2">
          <div className="mb-[25px] space-y-2">
            <h1 className="font-semibold text-3xl ">Login</h1>
            <p className="text-[#4B5563] text-sm leading-7 font-normal">
              Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang
              kamu cita-citata sejak dalam embrio!
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[30px]"
          >
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

            <FormItem>
              <div className="flex gap-4 items-center">
                <Input
                  className="w-4 accent-black text-[#F3F4F6]"
                  type="checkbox"
                  {...register("rememberMe")}
                />
                <Label className="font-semibold">Remember me</Label>
              </div>
            </FormItem>

            <Button
              type="submit"
              disabled={formStatus === "submitting"}
              className="bg-[#4F46E5] hover:bg-[#443be3] h-[59px]"
            >
              {formStatus === "submitting" ? "Logging In" : "Login"}
            </Button>
            
          </form>
        </div>

        <p className="text-center font-semibold text-[#4B5563]">
          Don't have an account?{" "}
          <Link className="text-[#4F46E5] " href="/signup">
            Sign In
          </Link>
        </p>
      </div>

      {/* Image div */}
      <Graphics>
        <GraphicsIcon image={lockImage}/> 
        <GraphicsText textContent="Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan nggak jadi beban kayak si Denis!" />
      </Graphics>
    </div>
  );
};

export default Login;
