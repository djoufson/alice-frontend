"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormResolver, TLoginFormSchema } from "../resolvers/schema";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const LoginContent = () => {
  const loginForm = useForm<TLoginFormSchema>(LoginFormResolver);
  const [isLoading, setIsLoading] = useState(false);
  function onSubmit(values: TLoginFormSchema) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
    loginForm.reset();
  }

  return (
    <div>
      <h1>Hi, Doc Welcome Back!!</h1>
      <p className="text-gray-500 text-center">I hope you are doing well</p>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-8">
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
            render={({ field }) =>
            (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginContent;
