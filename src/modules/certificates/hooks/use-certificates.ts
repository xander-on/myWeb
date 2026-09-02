import { useMutation, useQuery } from "@tanstack/react-query";
import { getCertificatesAction } from "@/modules/certificates/actions/get-certificates.action";
import { createCertificateAction } from "@/modules/certificates/actions/create-certificate.action";
import { deleteCertificateAction } from "@/modules/certificates/actions/delete-certificate.action";
import { updateCertificateAction } from "@/modules/certificates/actions/update-certificate.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

const certificatesQueryKey = ["certificates"] as const;

export const useCertificates = () => {

  const getCerfiticatesQuery = useQuery<Certificate[]>({
    queryKey: certificatesQueryKey,
    queryFn: getCertificatesAction,
    staleTime: 1000 * 60 * 5
  });


  const createCertificateMutation = useMutation({
    mutationFn: createCertificateAction,
    onSuccess: () => getCerfiticatesQuery.refetch()
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
    createCertificateMutation,
    deleteCertificateMutation,
    updateCertificateMutation
  }
}