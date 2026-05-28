
import axios from "axios";
import { envs } from "@/config/envs";
import { CertificateMapper } from "../mappers/certificateMapper";
import type { CertificateResponse } from "../interfaces/certificate.response";

type GraphQLResponse = {
  data: {
    certificados: CertificateResponse[];
  };
};

const getAll = async (fieldFilters = {}) => {

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
      limit:50
    }
  };

  const response = await axios.post<GraphQLResponse>(`${envs.strapiGraphql}`, { query, variables });
  if (response.status !== 200) return null;

  const certificates = response.data.data.certificados;
  if (!certificates) return null;

  const certificatesMapped = certificates.map( c => CertificateMapper.fromResponseToCertificate(c) );
  return certificatesMapped;
}


const getBySlug = async (slug: string) => {
  
  const filters = {
    slug: {
      eq: slug
    }
  }

  const response = await getAll(filters);
  if(!response) return null;

  return response[0];
}



export const certificatesService = {
  getAll,
  getBySlug
}