import type { ProjectResponse } from "@/features/projects/types/projectResponse";
import { envs } from "@/config/envs";
import { capitalizeFirst, truncateText } from "@/shared/utils";
import { Tag } from "@/shared/components";
import { Link } from "react-router-dom";

import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/shared/neo_brutalist/components/ui/card";

import { Button } from "@/shared/neo_brutalist/components/ui/button";

type Props = {
  project: ProjectResponse;
};

export const ProjectCard = ({ project }: Props) => {

  const { slug, name, description, cover, appType, tags } = project;

  return (
    <Card className="w-full max-w-sm flex flex-col justify-between pt-0">

      <div className="border-b-2 border-border">
        <img
          src={envs.strapi + cover?.url}
          alt={name}
          className="w-full h-48 object-contain"
        />
      </div>

      <CardHeader>
        <CardTitle className="flex flex-wrap items-center gap-2">
          {name}
          <span className="text-sm text-muted-foreground">
            / {capitalizeFirst(appType)}
          </span>
        </CardTitle>

        <CardDescription>
          {truncateText(description, 100)}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t.nombre} nameTech={t.nombre} />
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link to={`/projects/${slug}`} className="w-full">
          <Button className="w-full">
            View More
          </Button>
        </Link>
      </CardFooter>

    </Card>
  );
};