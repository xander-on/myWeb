import { strapiApi } from "@/modules/shared/infrastructure/api/strapiApi";
import { CertificateMapper } from "@/modules/certificates/mappers/certificate.mapper";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { CertificateResponse } from "@/modules/certificates/interfaces/certificate.response";

type GraphQLResponse = {
  data: {
    certificados: CertificateResponse[];
  };
};

export const getCertificates2Action = async (fieldFilters = {}): Promise<Certificate[] | null> => {

  const query = `
    query Certificates(
      $filters: CertificadoFiltersInput,
      $pagination: PaginationArg
    ) {
      certificados(
        filters: $filters
        pagination: $pagination
      ) {
        documentId
        slug
        name
        link
        description
        fecha
        image{ url }
        tags { nombre }
      }
    }
  `;

  const variables = {
    filters: {
      ...fieldFilters
    },
    pagination: {
      limit: 50
    }
  };

  const response = await strapiApi.post<GraphQLResponse>("", { query, variables });
  if (response.status !== 200) return null;

  const certificates = response.data.data.certificados;
  if (!certificates) return null;

  return certificates.map(c => CertificateMapper.fromResponseToCertificate(c));
}
