import { GeneralLoader }     from "@/shared/components";
import { capitalizeFirst }   from "@/shared/utils";
import { faGithub }          from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Gallery, Tag }      from "@/shared/components";
import { FontAwesomeIcon }   from "@fortawesome/react-fontawesome";
import ReactMarkdown         from "react-markdown";
import { useProjectDetails } from "@/features/projects/hooks/useProjectDetails";
import { Button } from "@/shared/neo_brutalist/components/ui/button";

export const ProjectDetailsPage = () => {

  const { project } = useProjectDetails();
  console.log(project);

  if (!project) return <GeneralLoader />;

  const {
    name,
    appType,
    tags,
    description,
    cover,
    gallery,
    urlRepositorio,
    urlPreview,
  } = project;

  const openExternal = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="py-10">

      {/* HEADER SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
          <div className="w-100 max-h-75 flex items-center justify-center p-2 bg-background">
            <img
              src={cover}
              alt={name}
              className="max-w-full max-h-75 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">

          <h3 className="text-2xl font-heading">
            <span className="text-main">{name}</span>
          </h3>

          <h5 className="text-sm text-foreground/70">
            {capitalizeFirst(appType)}
          </h5>

          <div className="flex flex-wrap gap-2">
            {
              tags.map(tag => <Tag key={tag} nameTech={tag} />)
            }
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Button onClick={ () => openExternal(urlPreview) }>
              <FontAwesomeIcon icon={faEye} />
              View project
            </Button>

            {urlRepositorio && (
              <Button
                variant="neutral"
                onClick={ () => openExternal(urlRepositorio) }
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>View Repository</span>
              </Button>
            )}

          </div>

        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="mt-12 border-t-2 border-border pt-8">
        <h5 className="mb-3 text-lg font-heading">Description:</h5>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mt-12 border-t-2 border-border pt-8">
        <h5 className="mb-4 text-lg font-heading">Screenshots:</h5>
        <Gallery images={gallery} />
      </section>

    </main>
  );
};