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

import React from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Graphics from "@/components/component/Graphics";
import GraphicsIcon from "@/components/component/GraphicsIcon";
import GraphicsText from "@/components/component/GraphicsText";
import { Label } from "@/components/ui/label";

import refreshIcon from "@/public/icons/refresh-ccw.png";

const ResetPassword = () => {
  type formSchema = {
    password: String;
    confirmPassword: String;
  };

  // zod implementation
  const form = useForm<formSchema>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (data: formSchema) => {
    console.log(data);
  };

  return (
    <div className="h-screen w-screen flex flex-row items-center gap-2">
      {/* Login div */}
      <div className="w-[50%] bg-[#FFFFFF] h-full px-[140px] py-[80px]">
        <div className="my-[35px] flex flex-col gap-2">
          <div className="mb-[25px] space-y-2">
            <h1 className="font-semibold text-3xl ">Reset Password?</h1>
            <p className="text-[#4B5563] text-sm leading-7 font-normal">
              Jangan pake kata sandi yang susah-susah makannya, ngerepotin mulu
              jadi orang.
            </p>
          </div>

          {/* Login Form */}

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[30px]"
          >
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
              <Label className="font-semibold">Password</Label>

              <Input
                className="h-[55px]"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 4,
                  maxLength: 10,
                })}
              />
              {errors.password && (
                <Label className="text-sm font-medium text-destructive">
                  Fill Confirm Password
                </Label>
              )}
            </FormItem>

            <Button
              type="submit"
              className="bg-[#4F46E5] hover:bg-[#443be3] h-[59px]"
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>

      {/* Image div */}
      <Graphics>
        <GraphicsIcon image={refreshIcon} />
        <GraphicsText textContent="Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan nggak jadi beban kayak si Denis!" />
      </Graphics>
    </div>
  );
};

export default ResetPassword;
