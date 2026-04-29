

import { useEffect, useState } from 'react'
import { certificatesService } from '../services/certificatesService';
import type { Certificate } from '../interfaces/certificate.interface';

export const useGetCertificados = () => {

  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getCertificates();
    }, []);
  
    const getCertificates = async () => {
      setLoading(true);
      const responseCertificates = await certificatesService.getAll();
      if (!responseCertificates) return;
      setCertificates(responseCertificates);
      setLoading(false);
    }

  return{
    certificates,
    loading
  }
}
