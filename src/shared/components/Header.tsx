import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/neo_brutalist/components/ui/navigation-menu";
import { Link }      from "react-router-dom";
import { useTheme }  from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { Button }    from "../neo_brutalist/components/ui/button";

const links = [
  {
    title:"Projects",
    href: "/projects",
    emoji: "🚀",
  },
  {
    title:"Contact",
    href: "/contact",
    emoji: "📨",
  },
  {
    title:"Cv",
    href: "/cv",
    emoji: "📝",
  },
]



export const Header = () => {

  const { isDark, toggleTheme } = useTheme();

  return (
    <NavigationMenu className="max-w-none flex justify-between px-8">
        
        {/* LEFT */}
        <Link to="/" className={navigationMenuTriggerStyle()}>
          <span className="text-2xl">AlexanderWeb</span>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center">
            <NavigationMenuList className="">

              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.emoji} {link.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>

            <Button 
              className="p-3 m-2" 
              onClick={() => toggleTheme(!isDark)}
            >
              {
                isDark 
                ? <Moon className="w-5 h-5" />
                : <Sun className="w-5 h-5" />
              }
            </Button>
        </div>

    </NavigationMenu>
  );
};
