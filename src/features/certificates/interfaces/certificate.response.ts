

export interface CertificateResponse {
  image      : { url: string };
  name       : string;
  documentId : string;
  slug       : string;
  tags       : { nombre: string }[];
  fecha      : string;
  link       : string;
  description: string;
}

