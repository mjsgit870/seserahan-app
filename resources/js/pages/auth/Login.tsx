import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useValidate } from "@/hooks/use-validate"
import { LoginProps, LoginSchema } from "@/schemas/AuthSchema"
import { Link, useForm } from "@inertiajs/react"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginProps>({
    email: "",
    password: ""
  })

  const handleSubmit = () => {
    useValidate(form.data, LoginSchema, form, {
      onSuccess: () => {
        form.post(route('login.post'))
      }
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-2 md:px-0">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Selamat datang</CardTitle>
          <CardDescription>Silahkan login untuk mengakses aplikasi</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="test@example.com" 
              className={form.errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
              value={form.data.email}
              onChange={(e) => form.setData('email', e.target.value)}
            />
            {!!form.errors.email && <span className="text-xs text-red-500">{form.errors.email}</span>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="flex items-center space-x-2">
              <Input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="********" 
                className={form.errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}
                value={form.data.password}
                onChange={(e) => form.setData('password', e.target.value)}
              />
              <Button variant={"outline"} size={"icon"} onClick={() => setShowPassword(!showPassword)} className="flex-shrink-0">
                {showPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
            {!!form.errors.password && <span className="text-xs text-red-500">{form.errors.password}</span>}
          </div>
        </CardContent>
        <CardFooter className="grid gap-2">
          <span className="text-sm text-muted-foreground mb-1">
            Tidak punya akun? <Link href={route('register')} className="underline text-primary">Daftar</Link>
          </span>
          <Button onClick={handleSubmit}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
