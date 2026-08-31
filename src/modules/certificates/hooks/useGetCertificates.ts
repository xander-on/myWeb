import { useQuery } from "@tanstack/react-query";
import { getCertificatesAction } from "@/modules/certificates/actions/getCertificates.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

export const useGetCertificates = () => {

  const { data: certificates = [], isLoading: loading } = useQuery<Certificate[] | null>({
    queryKey: ["certificates"],
    queryFn: getCertificatesAction,
  });

  return {
    certificates: certificates ?? [],
    loading,
  };
};
