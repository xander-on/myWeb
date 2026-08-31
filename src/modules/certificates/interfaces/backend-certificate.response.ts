

export interface BackendCertificateResponse {
  id          : string;
  slug        : string;
  name        : string;
  link        : string;
  description : string;
  date        : string;
  image       : string;
  tags        : string[];
}

export interface BackendCertificatesResponse {
  data  : BackendCertificateResponse[];
  total : number;
  limit : number;
  page  : number;
}
