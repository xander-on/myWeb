import { useEffect, useState } from "react";
import { getCertificatesAction } from "@/modules/certificates/application/actions/getCertificates.action";
import type { Certificate } from "@/modules/certificates/domain/entities/certificate.entity";

export const useGetCertificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCertificates();
  }, []);

  const getCertificates = async () => {
    setLoading(true);
    const responseCertificates = await getCertificatesAction();
    if (!responseCertificates) return;
    setCertificates(responseCertificates);
    setLoading(false);
  };

  return {
    certificates,
    loading,
  };
};
