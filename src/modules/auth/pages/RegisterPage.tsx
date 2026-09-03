import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/libraries/neo_brutalist/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/libraries/neo_brutalist/components/ui/card";
import { Input } from "@/libraries/neo_brutalist/components/ui/input";
import { Label } from "@/libraries/neo_brutalist/components/ui/label";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import { toast } from "sonner";


const initialForm = {
  email            : "",
  password         : "",
  confirmPassword  : "",
}

export const RegisterPage = () => {

  const { registerMutation } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);

  const updateField = (field: keyof typeof initialForm) => (
    e: ChangeEvent<HTMLInputElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const isPasswordMismatch = form.password !== form.confirmPassword;
  const isDisabledSubmit = !form.email || !form.password || !form.confirmPassword || isPasswordMismatch || registerMutation.isPending;

  const handleSubmit = () => {
    registerMutation.mutate({
      email    : form.email,
      password : form.password,
    }, {
      onSuccess: () => {
        toast.success("Registro exitoso. Inicia sesión");
        navigate("/login");
      },
      onError: () => toast.error("Error al registrarse")
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-height-800 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">REGISTER</CardTitle>
          <p className="text-muted-foreground text-sm mt-2">Crea tu cuenta para empezar</p>
        </CardHeader>

        <CardContent>
          <form
            className="grid gap-4"
            onSubmit={e => { e.preventDefault(); handleSubmit(); }}
          >
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <Label>Password</Label>
              <Input
                type="password"
                autoComplete="new-password"
                value={form.password}
                onChange={updateField("password")}
                placeholder="••••••••"
              />
            </div>

            <div className="grid gap-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={updateField("confirmPassword")}
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" disabled={isDisabledSubmit}>
              {registerMutation.isPending ? "Registrando..." : "Registrarse"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-main font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
