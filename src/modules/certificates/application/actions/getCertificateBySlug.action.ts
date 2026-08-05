import { getCertificatesAction } from "./getCertificates.action";
import type { Certificate } from "../../domain/entities/certificate.entity";

export const getCertificateBySlugAction = async (slug: string): Promise<Certificate | null> => {

  const filters = {
    slug: {
      eq: slug
    }
  }

  const response = await getCertificatesAction(filters);
  if (!response) return null;

  return response[0];
}
