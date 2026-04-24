import { Skeleton } from "@/shared/neo_brutalist/components/ui/skeleton";

export const ProjectCardSkeleton = ({ repeat }: { repeat: number }) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-sm flex flex-col justify-between border-2 border-border shadow-shadow rounded-base overflow-hidden"
        >

          {/* IMAGE SKELETON */}
          <div className="border-b-2 border-border">
            <Skeleton className="w-full h-48" />
          </div>

          {/* HEADER */}
          <div className="p-4 space-y-3">
            {/* TITLE */}
            <Skeleton className="h-5 w-3/4" />

            {/* SUBTITLE */}
            {/* <Skeleton className="h-4 w-1/3" /> */}

            {/* DESCRIPTION LINES */}
            <div className="space-y-2 pt-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-4/6" />
            </div>
          </div>

          {/* TAGS */}
          <div className="px-4 pb-4 flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-base" />
            <Skeleton className="h-6 w-20 rounded-base" />
          </div>

          {/* FOOTER BUTTON */}
          <div className="p-4 pt-0">
            <Skeleton className="h-10 w-full rounded-base" />
          </div>

        </div>
      ))}
    </>
  );
};