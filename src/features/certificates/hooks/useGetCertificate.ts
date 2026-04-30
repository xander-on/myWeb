import { useEffect, useState } from "react";
import { certificatesService } from "../services/certificatesService";
import type { Certificate } from "../interfaces/certificate.interface";


export const useGetCertificate = (slug: string | null) => {

  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading]         = useState(true);

  useEffect(() => {    
    getCertificado();
  }, [slug]);

  const getCertificado = async () => {
    if (!slug) return;
    setLoading(true);

    const responseCertificado = await certificatesService.getBySlug(slug);
    if (responseCertificado) setCertificate(responseCertificado);

    setLoading(false);
  }

  return {
    certificate,
    loading
  }
}

