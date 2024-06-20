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

import type { RootState } from '@/app/lib/store'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail } from '@/app/lib/emailSlice'
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

import lockImage from '@/public/icons/lock.png'

const VerifyAccount = () => {

  const router = useRouter()
  const { toast } = useToast();

  const verifyEmail = useSelector((state: RootState) => state.email.email)

  console.log(verifyEmail)
  type formSchema = {
    OTP: String,
  };

  // zod implementation
  const form = useForm<formSchema>({
    
    defaultValues: {
      OTP: "",
    },
  });

  const {handleSubmit, register, formState:{errors}} = form

  const onSubmit = async (data: formSchema) => {
    console.log(data);
    axios.post('https://learn-nodejs-qkio.onrender.com/api/v1/user/verify-otp',{
      email: verifyEmail,
      otp: data.OTP
    }).then((res) => {
      console.log(res)
      toast({
        description: "Email Verified Successfully",
      });
      router.push('/login')
    }).catch((err)=> {
      console.log(err)
      toast({
        variant: "destructive",
        description: "Error Verifying Email"
      })
    })
  };

  return (
    <div className="h-screen w-screen flex flex-row items-center gap-2">
      {/* Login div */}
      <div className="w-[50%] bg-[#FFFFFF] h-full px-[140px] py-[80px]">
        <div className="flex justify-center items-center bg-[#EEF2FF] h-[60px] w-[60px] rounded-xl">
            <p className="text-[#4F46E5] font-semibold text-2xl">G</p>
        </div>
        <div className="my-[35px] flex flex-col gap-2">
          <div className="mb-[25px] space-y-2">
            <h1 className="font-semibold text-3xl ">Verify Account!</h1>
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
              <Label className="font-semibold">OTP</Label>

              <Input
                className="h-[55px] tracking-[30px]"
                {...register("OTP", {
                  required: true,
                  minLength: 4,
                  maxLength: 8,
                })}
              />
              {errors.OTP && (
                <Label className="text-sm font-medium text-destructive">
                  Fill OTP
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
      <GraphicsIcon image={lockImage}/>
      <GraphicsText textContent = 'Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan nggak jadi beban kayak si Denis!'/>
      </Graphics>
    </div>
  );
};

export default VerifyAccount;
