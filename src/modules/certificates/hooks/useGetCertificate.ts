import { useEffect, useState } from "react";
import { getCertificateBySlugAction } from "@/modules/certificates/actions/getCertificateBySlug.action";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";

export const useGetCertificate = (slug: string | null) => {
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCertificado();
  }, [slug]);

  const getCertificado = async () => {
    if (!slug) return;
    setLoading(true);

    const responseCertificado = await getCertificateBySlugAction(slug);
    if (responseCertificado) setCertificate(responseCertificado);

    setLoading(false);
  };

  return {
    certificate,
    loading,
  };
};
