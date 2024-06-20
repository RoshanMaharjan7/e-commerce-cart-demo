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
import Graphics from "@/components/component/Graphics";
import GraphicsIcon from "@/components/component/GraphicsIcon";
import GraphicsText from "@/components/component/GraphicsText";
import { useRouter } from "next/navigation";
import { setEmail } from '@/app/lib/emailSlice'
import { useDispatch } from "react-redux";
import { Label } from "@/components/ui/label";

import  lockIcon  from "@/public/icons/lock.png";

const ForgotPassword = () => {
    const router = useRouter();
    const dispatch = useDispatch()

  type formSchema = {
    email: String,
  };

  // zod implementation
  const form = useForm<formSchema>({
   
    defaultValues: {
      email: "",
    },
  });

  const {handleSubmit, register, formState:{errors}} = form

  const onSubmit = async (data: formSchema) => {
    console.log(data);
    dispatch(setEmail(data.email))
    router.push('/verify-account')
  };

  return (
    <div className="h-screen w-screen flex flex-row items-center gap-2">
      {/* Login div */}
      <div className="w-[50%] bg-[#FFFFFF] h-full px-[140px] py-[80px]">
        <div className="my-[35px] flex flex-col gap-2">
          <div className="mb-[25px] space-y-2">
            <h1 className="font-semibold text-3xl ">Forgot Password?</h1>
            <p className="text-[#4B5563] text-sm leading-7 font-normal">
            Masukkan email yang kamu daftarkan sebelumnya, nanti kamu bakal dikirim email.
            </p>
          </div>

          {/* Login Form */}
          
            <form
              onSubmit={form.handleSubmit(onSubmit)}
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


             

              <Button
                type="submit"
                className="bg-[#4F46E5] hover:bg-[#443be3] h-[59px]"
              >
                Continue
              </Button>
            </form>
          
        </div>
      </div>

      {/* Image div */}
      <Graphics>
      <GraphicsIcon image={lockIcon}/>
      <GraphicsText textContent = 'Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan nggak jadi beban kayak si Denis!'/>
      </Graphics>
    </div>
  );
};

export default ForgotPassword;
