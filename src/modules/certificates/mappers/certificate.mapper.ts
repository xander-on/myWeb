import { envs } from "@/config/envs";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { CertificateResponse } from "@/modules/certificates/interfaces/certificate.response";


export class CertificateMapper {
  static fromResponseToCertificate(certificate: CertificateResponse): Certificate {
    return {
      token       : certificate.documentId,
      slug        : certificate.slug,
      name        : certificate.name,
      link        : certificate.link,
      description : certificate.description,
      fecha       : certificate.fecha,
      image       : `${envs.strapi}${certificate.image.url}`,
      tags        : certificate.tags.map((t) => t.nombre)
    }  
  }
}