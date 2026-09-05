import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/libraries/neo_brutalist/components/ui/navigation-menu";
import { Link }      from "react-router-dom";
import { useTheme }  from "@/modules/shared/hooks/useTheme";
import { Sun, Moon, Menu, X, LogOut } from "lucide-react";
import { Button }    from "@/libraries/neo_brutalist/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import { isAdmin } from "@/modules/auth/utils/jwt";

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
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { verifyAuth } = useAuth();
  const { isValid, refetch } = verifyAuth;

  const token = localStorage.getItem("token");
  const isAdminUser = !!token && isAdmin(token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    refetch();
    navigate("/login");
  };

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
            {isValid && isAdminUser && (
              <NavigationMenuItem className="px-3 text-white">
                <NavigationMenuLink asChild>
                  <Link to="/admin">
                    ⚙️ Admin
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
            {isValid ? (
              <NavigationMenuItem className="px-3 text-white">
                <Button
                  variant="neutral"
                  className="flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </Button>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className="px-3 text-white">
                <NavigationMenuLink asChild>
                  <Link to="/login">
                    👤 Login
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
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







