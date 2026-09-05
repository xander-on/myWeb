import { backendApi } from "@/config/api/backendApi";
import type { Certificate } from "../interfaces/certificate.interface";
import type { Paginated } from "@/modules/shared/interfaces/paginated.reponse";
import type { CertificateResponse } from "../interfaces/certificate.response";
import { CertificateMapper } from "../mappers/certificate.mapper";




export const searchCertificatesAction = async (): Promise<Certificate[]> => {
  try{
    const { data } = await backendApi.get<Paginated<CertificateResponse>>("/certificates/search");

    if (!data) 
      throw "Error al buscar los certificados";

    return data.data.map(c => CertificateMapper.fromResponseToCertificate(c));

  }catch(err){
    console.log(err);
    throw "Error al buscar los certificados";
  }
}