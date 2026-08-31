import { getCertificates2Action } from "./getCertificates2.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

export const getCertificateBySlugAction = async (slug: string): Promise<Certificate | null> => {

  const filters = {
    slug: {
      eq: slug
    }
  }

  const response = await getCertificates2Action(filters);
  if (!response) return null;

  return response[0];
}
