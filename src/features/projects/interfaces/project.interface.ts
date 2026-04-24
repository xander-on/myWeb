export interface Project {
  documentId      : string;
  slug            : string;
  name            : string;
  description     : string;
  appType         : string;
  tags            : string[];
  cover           : string;
  gallery         : string[];
  urlRepositorio ?: string;
  urlPreview     ?: string;
}