"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormResolver, TLoginFormSchema } from "../resolvers/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/utils/AppRoutes";
import { aliceApi } from "@/lib/AliceApi";
const LoginContent = () => {
  const router = useRouter();
  const loginForm = useForm<TLoginFormSchema>(LoginFormResolver);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  async function onSubmit(values: TLoginFormSchema) {
    setErrors([]);
    setIsLoading(true);
    const data = await aliceApi.login(values.email, values.password);
    if (data?.isSuccess) {
      loginForm.reset();
      toast.success("Login successful");
      router.push(AppRoutes.admin.dashboard);
    } else {
      setErrors(data.error?.errors || []);
      toast.error("Login failed");
    }
    setIsLoading(false);
  }

  return (
    <div className="w-full h-[100svh] flex items-center justify-center">
      <div className="p-8 relative hidden md:block md:w-1/2 h-full bg-primary">
        <Link href="/">
          <img src="/assets/logo-white-text.png" alt="Logo" />
        </Link>
        <img
          className="absolute bottom-0 left-0 w-full object-cover"
          src="/assets/login-doctor.png"
          alt="doctor login"
        />
      </div>
      <div className="p-2 w-full h-full md:w-1/2 flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <img src="/assets/logo.png" className="md:hidden mb-6" alt="Logo" />
          <h1 className="text-2xl font-bold">Hi, Doc Welcome Back!!</h1>
          <p className="text-gray-500 text-center">I hope you are doing well</p>
        </div>
        <div className="w-full max-w-[350px]">
          <ul className="text-red-500">
            {errors.map((error) => (
              <li className="list-disc" key={error}>
                {error}
              </li>
            ))}
          </ul>
        </div>
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-[350px]"
          >
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@doe.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <hr />
            <p className="text-center">
              Don't have an account? &nbsp;
              <Link href="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginContent;
