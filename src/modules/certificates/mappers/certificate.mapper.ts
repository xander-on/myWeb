import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { CertificateResponse } from "@/modules/certificates/interfaces/certificate.response";


export class CertificateMapper {
  static fromResponseToCertificate(certificate: CertificateResponse): Certificate {
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
