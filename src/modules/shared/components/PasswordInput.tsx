import { useState, type ComponentProps } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/libraries/neo_brutalist/lib/utils";

type Props = Omit<ComponentProps<"input">, "type">;

export const PasswordInput = ({ className, disabled, ...props }: Props) => {
  const [show, setShow] = useState(false);
  const isEyeDisabled = disabled || !props.value;

  return (
    <div className={cn("relative", className)}>
      <input
        type={show ? "text" : "password"}
        data-slot="input"
        className="flex h-10 w-full rounded-base border-2 border-border bg-secondary-background selection:bg-main selection:text-main-foreground pr-10 px-3 py-2 text-sm font-base text-foreground file:border-0 file:bg-transparent file:text-sm file:font-heading placeholder:text-foreground/50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShow(prev => !prev)}
        disabled={isEyeDisabled}
        aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
        aria-pressed={show}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-foreground/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
      >
        {
          show 
            ? <EyeOff className="h-4 w-4" /> 
            : <Eye className="h-4 w-4" />
        }
      </button>
    </div>
  );
};