import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/shared/neo_brutalist/components/ui/navigation-menu";
import { Link } from "react-router-dom";

// import { cn } from "@/shared/neo_brutalist/lib/utils";

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
  return (
    <NavigationMenu className="w-full px-4 max-w-none justify-between">
      <NavigationMenuList className="w-full flex">
        
        {/* LEFT */}
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            <span className="text-2xl">AlexanderWeb</span>
          </Link>
        </NavigationMenuItem>

        {/* RIGHT */}
        <div className="flex gap-4">
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
        </div>

      </NavigationMenuList>
    </NavigationMenu>
  );
};
