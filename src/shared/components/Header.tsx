import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/neo_brutalist/components/ui/navigation-menu";
import { Link }      from "react-router-dom";
import { useTheme }  from "../hooks/useTheme";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button }    from "../neo_brutalist/components/ui/button";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <NavigationMenu className="max-w-none flex flex-col md:flex-row justify-between px-8 bg-[#1f1f1f] text-main">
        
        {/* LEFT */}

        <div className="flex items-center justify-between w-full md:w-auto">

          <Link to="/">
            <h1 className="text-2xl text-white font-bold">Alexander
              <span className="text-main">Web</span>
            </h1>
          </Link>

          <Button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            variant={"neutral"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center w-full md:w-auto ">
          <NavigationMenuList
            className={`
              ${open ? "flex" : "hidden"} 
              flex-col mt-4 gap-3
              md:flex md:flex-row md:items-center md:mt-0 items-start
            `}
          >
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
          </NavigationMenuList>
        </div>

       

    </NavigationMenu>
  );
};







