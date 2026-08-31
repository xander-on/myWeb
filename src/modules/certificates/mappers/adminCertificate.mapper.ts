import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { BackendCertificateResponse } from "@/modules/certificates/interfaces/backend-certificate.response";


export class AdminCertificateMapper {
  static fromResponseToCertificate(certificate: BackendCertificateResponse): Certificate {
    return {
      token       : certificate.id,
      slug        : certificate.slug,
      name        : certificate.name,
      link        : certificate.link,
      description : certificate.description,
      fecha       : certificate.date,
      image       : certificate.image,
      tags        : certificate.tags
    }  
  }
}
