import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
    title:"Certificates",
    href: "/certificates",
    emoji: "🏆",
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
    <NavigationMenu className="max-w-none flex justify-between px-8 bg-[#1f1f1f] text-main">
        
        {/* LEFT */}
        <Link to="/">
          <h1 className="text-2xl text-white font-bold">Alexander
            <span className="text-main">Web</span>
          </h1>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center">
            <NavigationMenuList className="">

              {links.map((link) => (
                <NavigationMenuItem key={link.href} className="px-3 text-white">
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.href}
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
