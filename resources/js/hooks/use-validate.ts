import { useForm } from "@inertiajs/react"
import { z, ZodSchema } from "zod"

export interface ValidateParams<T> {
  onSuccess: () => void
}

export const useValidate = <T extends object>(
  data: T,
  schema: ZodSchema<T>,
  form: ReturnType<typeof useForm<T>>,
  options: ValidateParams<T>
) => {
  form.clearErrors()
  try {
    schema.parse(data)
    options.onSuccess()
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        form.setError(err.path[0] as keyof T, err.message)
      })
    }
  }
}
