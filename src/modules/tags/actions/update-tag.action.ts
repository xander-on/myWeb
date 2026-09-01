import { backendApi } from "@/config/api/backendApi";

export interface UpdateTagRequest {
  token    : string;
  isActive : boolean;
}

export const updateTagAction = async (payload: UpdateTagRequest)
: Promise<void> => {

  try{
    const { data } = await backendApi.patch(`/tags/${payload.token}`, {
      isActive: payload.isActive
    });

    if (!data)
      throw "Error al actualizar el tag";

  }catch(err){
    console.log(err);
    throw "Error al actualizar el tag";
  }
}
