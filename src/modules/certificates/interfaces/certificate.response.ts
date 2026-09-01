

export interface CertificateTag {
  id   : string;
  name : string;
}

export interface CertificateResponse {
  id          : string;
  slug        : string;
  name        : string;
  link        : string;
  description : string;
  date        : string;
  image       : string;
  tags        : CertificateTag[];
}


