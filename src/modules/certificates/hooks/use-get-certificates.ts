import { useQuery } from "@tanstack/react-query";
import { getCertificatesAction } from "@/modules/certificates/actions/getCertificates.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

export const useGetCertificates = () => {

  const getCerfiticatesQuery = useQuery<Certificate[]>({
    queryKey: ["certificates"],
    queryFn: getCertificatesAction,
    staleTime: 1000 * 60 * 5
  });

  return {
    getCerfiticatesQuery
  };
};
