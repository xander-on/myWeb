import { useEffect, useState } from "react";
import { getCertificates2Action } from "@/modules/certificates/actions/getCertificates2.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

export const useGetCertificates2 = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCertificates();
  }, []);

  const getCertificates = async () => {
    setLoading(true);
    const responseCertificates = await getCertificates2Action();
    if (!responseCertificates) return;
    setCertificates(responseCertificates);
    setLoading(false);
  };

  return {
    certificates,
    loading,
  };
};
