import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const BackToMenu = () => (
  <Link 
    to="/admin" 
    className="inline-flex items-center gap-2 text-main font-semibold hover:underline"
  >
    <ArrowLeft className="size-4" />
    Menu
  </Link>
);