import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCertificatesAction } from "@/modules/certificates/actions/get-certificates.action";
import { createCertificateAction } from "@/modules/certificates/actions/create-certificate.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

const certificatesQueryKey = ["certificates"] as const;

export const useGetCertificates = () => {

  const getCerfiticatesQuery = useQuery<Certificate[]>({
    queryKey: certificatesQueryKey,
    queryFn: getCertificatesAction,
    staleTime: 1000 * 60 * 5
  });

  return {
    getCerfiticatesQuery
  };
};

export const useCreateCertificate = () => {

  const queryClient = useQueryClient();

  const createCertificateMutation = useMutation({
    mutationFn: createCertificateAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: certificatesQueryKey });
    },
  });

  return {
    createCertificateMutation
  };
};
