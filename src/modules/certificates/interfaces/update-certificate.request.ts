export interface UpdateCertificateRequest {
  id          : string;
  name?       : string;
  link?       : string;
  description?: string;
  date?       : string | null;
  image?      : string;
  tagIds?     : string[];
}
