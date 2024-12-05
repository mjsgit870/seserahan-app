import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="password">Password</Label>
      <div className="flex items-center space-x-2">
        <Input type={showPassword ? "text" : "password"} id="password" placeholder="********" />
        <Button variant={"outline"} size={"icon"} onClick={() => setShowPassword(!showPassword)} className="flex-shrink-0">
          {showPassword ? <EyeOff /> : <Eye />}
        </Button>
      </div>
    </div>
  )
}
