

export interface CertificateResponse {
  id          : string;
  slug        : string;
  name        : string;
  link        : string;
  description : string;
  date        : string;
  image       : string;
  tags        : string[];
}

export interface CertificatesResponse {
  data  : CertificateResponse[];
  total : number;
  limit : number;
  page  : number;
}
