import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Selamat datang</CardTitle>
          <CardDescription>Silahkan login untuk mengakses aplikasi</CardDescription>
        </CardHeader>
        <CardContent className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="test@example.com" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="flex items-center space-x-2">
              <Input type={showPassword ? "text" : "password"} id="password" placeholder="********" />
              <Button variant={"outline"} size={"icon"} onClick={() => setShowPassword(!showPassword)} className="flex-shrink-0">
                {showPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
