import { useMutation, useQuery } from "@tanstack/react-query";
import { getCertificatesAction } from "@/modules/certificates/actions/get-certificates.action";
import { createCertificateAction } from "@/modules/certificates/actions/create-certificate.action";
import { deleteCertificateAction } from "@/modules/certificates/actions/delete-certificate.action";
import { updateCertificateAction } from "@/modules/certificates/actions/update-certificate.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import { searchCertificatesAction } from "../actions/search-certificates.action";

export enum UseCertificateType {
  GET_ALL = 'get-all',
  SEARCH  = 'search',
  BY_ID   = 'by-id',
  MUTATE  = 'mutate'
}

export const useCertificates = (queryKey: UseCertificateType) => {

  const getCerfiticatesQuery = useQuery<Certificate[]>({
    queryKey: ['all-certificates'],
    queryFn: getCertificatesAction,
    staleTime: 1000 * 60 * 5,
    enabled: queryKey === UseCertificateType.GET_ALL
  });

  const searchCertificatesQuery = useQuery<Certificate[]>({
    queryKey: ['search-certificates'],
    queryFn: searchCertificatesAction,
    staleTime: 1000 * 60 * 5,
    enabled: queryKey === UseCertificateType.SEARCH
  });

  const createCertificateMutation = useMutation({
    mutationFn: createCertificateAction,
    onSuccess: () => getCerfiticatesQuery.refetch(),
  });

  const deleteCertificateMutation = useMutation({
    mutationFn: deleteCertificateAction,
    onSuccess: () => getCerfiticatesQuery.refetch()
  });

  const updateCertificateMutation = useMutation({
    mutationFn: updateCertificateAction,
    onSuccess: () => getCerfiticatesQuery.refetch()
  });

  return {
    getCerfiticatesQuery,
    searchCertificatesQuery,

    createCertificateMutation,
    deleteCertificateMutation,
    updateCertificateMutation
  }
}