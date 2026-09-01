import { backendApi } from "@/config/api/backendApi";
import { TagMapper } from "@/modules/tags/mappers/tag.mapper";
import type { Tag } from "@/modules/tags/interfaces/tag.interface";
import type { TagResponse } from "@/modules/tags/interfaces/tag.response";


export const getTagsAction = async (): Promise<Tag[]> => {

  try{
    const { data } = await backendApi.get<TagResponse[]>("/tags");

    if (!data)
      throw "Error al obtener los tags";

    return data.map(t => TagMapper.fromResponseToTag(t));

  }catch(err){
    console.log(err);
    throw "Error al obtener los tags";
  }

}