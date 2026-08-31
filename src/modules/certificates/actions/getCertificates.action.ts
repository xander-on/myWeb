import { backendApi } from "@/modules/certificates/infrastructure/api/backendApi";
import { CertificateMapper } from "@/modules/certificates/mappers/certificate.mapper";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { CertificatesResponse } from "@/modules/certificates/interfaces/certificate.response";

export const getCertificatesAction = async (): Promise<Certificate[] | null> => {

  const response = await backendApi.get<CertificatesResponse>("/certificates");
  if (response.status !== 200) return null;

  const certificates = response.data.data;
  if (!certificates) return null;

  return certificates.map(c => CertificateMapper.fromResponseToCertificate(c));
}
