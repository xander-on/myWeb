import { Link } from "react-router-dom";
import { Card, CardDescription, CardTitle } from "@/libraries/neo_brutalist/components/ui/card";

interface Props {
  title: string;
  description: string;
  href: string;
}

export const AdminMenuCard = ({ title, description, href }: Props) => {
  return (
    <Link to={href} className="block group">
      <Card className="p-6 transition-all cursor-pointer border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
        <CardTitle className="text-lg font-heading mb-2">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </Card>
    </Link>
  );
};
