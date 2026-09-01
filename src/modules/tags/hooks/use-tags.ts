import { useMutation, useQuery } from "@tanstack/react-query";
import { getTagsAction } from "@/modules/tags/actions/get-tags.action";
import { createTagAction } from "@/modules/tags/actions/create-tag.action";
import { deleteTagAction } from "@/modules/tags/actions/delete-tag.action";
import { updateTagAction } from "@/modules/tags/actions/update-tag.action";
import type { Tag } from "@/modules/tags/interfaces/tag.interface";

const tagsQueryKey = ["tags"] as const;

export const useTags = () => {

  const getTagsQuery = useQuery<Tag[]>({
    queryKey: tagsQueryKey,
    queryFn: getTagsAction,
    staleTime: 1000 * 60 * 5
  });


  const createTagMutation = useMutation({
    mutationFn: createTagAction,
    onSuccess: () => getTagsQuery.refetch()
  });

  const deleteTagMutation = useMutation({
    mutationFn: deleteTagAction,
    onSuccess: () => getTagsQuery.refetch()
  });

  const updateTagMutation = useMutation({
    mutationFn: updateTagAction,
    onSuccess: () => getTagsQuery.refetch()
  });

  return {
    getTagsQuery,
    createTagMutation,
    deleteTagMutation,
    updateTagMutation
  }
}