


export interface ProjectResponse {
  documentId      : string;
  slug            : string;
  name            : string;
  description     : string;
  appType         : string;
  tags            : { nombre: string }[];
  cover           : { url: string };
  gallery         : { url: string }[];
  urlRepositorio ?: string;
  urlPreview     ?: string;
}