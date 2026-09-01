import { backendApi } from "@/config/api/backendApi";


export const deleteCertificateAction = async (id: string)
: Promise<void> => {

  try{
    await backendApi.delete(`/certificates/${id}`);

  }catch(err){
    console.log(err);
    throw "Error al eliminar el certificate";
  }
}