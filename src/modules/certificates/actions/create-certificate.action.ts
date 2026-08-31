import { backendApi } from "@/config/api/backendApi";
import type { CreateCertificateRequest } from "../interfaces/create-certificate.request";



export const createCertificateAction = async (payload: CreateCertificateRequest)
: Promise<void> => {

  try{
    const { data } = await backendApi.post("/certificates", payload);

    if (!data) 
      throw "Error al crear el certificado";

  }catch(err){
    console.log(err);
    throw "Error al crear el certificado";
  }
}
