import { envs } from "@/config/envs";
import type { Certificate } from "@/modules/certificates/interfaces/certificate.interface";
import type { Certificate2Response } from "@/modules/certificates/interfaces/certificate2.response";


export class Certificate2Mapper {
  static fromResponseToCertificate(certificate: Certificate2Response): Certificate {
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
