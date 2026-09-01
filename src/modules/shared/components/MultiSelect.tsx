import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/libraries/neo_brutalist/lib/utils";

interface Option {
  id   : string;
  name : string;
}

interface Props {
  options     : Option[];
  value       : string[];
  onChange    : (value: string[]) => void;
  placeholder?: string;
}

export const MultiSelect = ({
  options,
  value,
  onChange,
  placeholder = "Selecciona opciones",
}: Props) => {

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (id: string) => {
    onChange(value.includes(id) ? value.filter(v => v !== id) : [...value, id]);
  };

  const remove = (id: string) => {
    onChange(value.filter(v => v !== id));
  };

  const selected = options.filter(o => value.includes(o.id));

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className={cn(
          "flex w-full min-h-11 flex-wrap items-center justify-between gap-2 whitespace-normal rounded-base border-2 border-border bg-secondary-background px-4 py-2 text-sm text-foreground shadow-shadow cursor-pointer",
          open && "ring-2 ring-ring ring-offset-2"
        )}
      >
        <span className="flex flex-wrap items-center gap-1">
          {selected.length > 0
            ? selected.map((s) => (
                <span
                  key={s.id}
                  onClick={(e) => { e.stopPropagation(); remove(s.id); }}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-main px-2 py-0.5 text-xs text-main-foreground"
                >
                  {s.name}
                  <X className="size-3 cursor-pointer" />
                </span>
              ))
            : <span className="text-foreground opacity-70">{placeholder}</span>}
        </span>
        <ChevronDown className={cn("size-4 shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-base border-2 border-border bg-secondary-background shadow-shadow">
          {options.length === 0 && (
            <p className="px-3 py-2 text-sm text-foreground opacity-70">No hay opciones</p>
          )}

          {options.map((opt) => {
            const isSelected = value.includes(opt.id);
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => toggle(opt.id)}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2 text-sm text-foreground cursor-pointer hover:bg-main/20",
                  isSelected && "bg-main/30"
                )}
              >
                {opt.name}
                {isSelected && <Check className="size-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};