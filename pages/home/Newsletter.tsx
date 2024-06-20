"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  type formSchema = {
    email: String;
  };

  // zod implementation
  const form = useForm<formSchema>({
    defaultValues: {
      email: "",
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
    <div className="max-w-screen xl:px-16 px-4 flex flex-col lg:flex-row justify-between py-20 items-center">
      <div>
        <h3 className="text-[#323334] text-[28px] font-bold">
          SING UP FOR THE NEWSLETTER
        </h3>
        <p className="text-[18px] font-normal text-[#323334]">
          Subscribe for the latest stories and promotions
        </p>
      </div>
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="lg:w-[515px]  h-[50px] rounded-none border border-[#323334] bg-transparent font-normal text-[16px] text-[#323334]"
          placeholder="Enter your e-mail address."
          {...register("email", {
            required: true,
            minLength: 2,
          })}
        />
        <Button type="submit" className="rounded-none w-[85px] h-[50px]">
          <Image src={"/icons/mail.svg"} width={21} height={16.5} alt="mail" />
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
