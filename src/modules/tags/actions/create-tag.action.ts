import { backendApi } from "@/config/api/backendApi";
import type { CreateTagRequest } from "@/modules/tags/interfaces/create-tag.request";


export const createTagAction = async (payload: CreateTagRequest)
: Promise<void> => {

  try{
    const { data } = await backendApi.post("/tags", payload);

    if (!data)
      throw "Error al crear el tag";

  }catch(err){
    console.log(err);
    throw "Error al crear el tag";
  }
}