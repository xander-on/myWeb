import { backendApi } from "@/config/api/backendApi";
import { CertificateMapper } from "@/modules/certificates/mappers/certificate.mapper";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { Paginated } from "@/modules/shared/interfaces/paginated.reponse";
import type { CertificateResponse } from "../interfaces/certificate.response";

export const getCertificatesAction = async (): Promise<Certificate[] | null> => {

  try{
    const { data } = await backendApi.get<Paginated<CertificateResponse>>("/certificates");

    if (!data) return null;

    return data.data.map(c => CertificateMapper.fromResponseToCertificate(c));

  }catch(err){
    console.log(err);
    throw "Error al obtener los certificados";
  }
  
}
