import { backendApi } from "@/modules/certificates/infrastructure/api/backendApi";
import { AdminCertificateMapper } from "@/modules/certificates/mappers/adminCertificate.mapper";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { BackendCertificatesResponse } from "@/modules/certificates/interfaces/backend-certificate.response";

export const getCertificatesAction = async (): Promise<Certificate[] | null> => {

  const response = await backendApi.get<BackendCertificatesResponse>("/certificates");
  if (response.status !== 200) return null;

  const certificates = response.data.data;
  if (!certificates) return null;

  return certificates.map(c => AdminCertificateMapper.fromResponseToCertificate(c));
}
