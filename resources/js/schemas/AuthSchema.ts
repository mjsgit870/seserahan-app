import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
})

export type LoginProps = z.infer<typeof LoginSchema>