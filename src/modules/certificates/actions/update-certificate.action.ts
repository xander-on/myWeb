import { backendApi } from "@/config/api/backendApi";
import type { UpdateCertificateRequest } from "../interfaces/update-certificate.request";


export const updateCertificateAction = async (payload: UpdateCertificateRequest)
: Promise<void> => {

  const { id, ...body } = payload;

  try{
    await backendApi.patch(`/certificates/${id}`, body);

  }catch(err){
    console.log(err);
    throw "Error al actualizar el certificado";
  }
}
