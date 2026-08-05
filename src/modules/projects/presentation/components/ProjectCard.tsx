import { capitalizeFirst, truncateText } from "@/modules/shared/presentation/utils";
import { Tag } from "@/modules/shared/presentation/components";
import { Link } from "react-router-dom";

import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
} from "@/modules/shared/presentation/neo_brutalist/components/ui/card";

import { Button } from "@/modules/shared/presentation/neo_brutalist/components/ui/button";
import type { Project } from "../../domain/entities/project.entity";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {

  const { slug, name, description, cover, appType, tags } = project;

  return (
    <Card className="w-full max-w-sm flex flex-col justify-between pt-0 bg-transparent ">

      <div className="border-b-2 border-border">
        <img
          src={cover}
          alt={name}
          className="w-full h-48 object-contain"
        />
      </div>

      <CardHeader>
        
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map((t) => (
            <Tag key={t} nameTech={t} />
          ))}
        </div>

        <CardTitle className="flex flex-wrap items-center gap-2">
          
        </CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className=" font-bold">
          {name}
          <span className="text-muted-foreground">
            / {capitalizeFirst(appType)}
          </span>
        </h2>

        <div className="text-sm">
          {truncateText(description, 100)}
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