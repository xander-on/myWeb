import { backendApi } from "@/config/api/backendApi";


export const deleteTagAction = async (id: string)
: Promise<void> => {

  try{
    await backendApi.delete(`/tags/${id}`);

  }catch(err){
    console.log(err);
    throw "Error al eliminar el tag";
  }
}