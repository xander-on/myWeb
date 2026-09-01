


import type { CertificateTag } from "@/modules/certificates/interfaces/certificate.response";


export interface Certificate {
  token       : string;
  slug        : string;
  name        : string;
  link        : string;
  description : string;
  fecha?      : string;
  image       : string,
  tags        : CertificateTag[]
}

