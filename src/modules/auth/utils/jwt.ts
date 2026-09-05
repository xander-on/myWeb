export interface JwtPayload {
  roles?: string[];
  email?: string;
  sub?: string;
  exp?: number;
  iss?: string;
  aud?: string;
  [key: string]: unknown;
}

export const getJwtPayload = (token: string): JwtPayload | null => {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );

    return JSON.parse(json) as JwtPayload;
  } catch {
    return null;
  }
};

export const getRoles = (token: string): string[] => {
  const payload = getJwtPayload(token);
  return payload?.roles ?? [];
};

export const isAdmin = (token: string): boolean =>
  getRoles(token).includes("admin");