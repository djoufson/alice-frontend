import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;

export const LoginFormResolver = {
  resolver: zodResolver(LoginFormSchema),
  defaultValues: {
    email: "",
    password: "",
  },
};
