import { createHash } from "crypto";

export function isValidUri(uri: string): boolean {
  try {
    // allow custom protocols like ipfs:// and ar:// by replacing them temporarily
    const normalized = uri.replace(/^([a-z0-9+.-]+):\/\//i, "https://");
    // eslint-disable-next-line no-new
    new URL(normalized);
    return true;
  } catch {
    return false;
  }
}

export function isLikelyMimeType(t: string): boolean {
  // very permissive check: type/subtype
  return /^[a-z0-9!#$&^_-]+\/[a-z0-9\-+.]+$/i.test(t.trim());
}

export function sha256Hex(buffer: Buffer | Uint8Array | string): string {
  const b =
    typeof buffer === "string"
      ? Buffer.from(buffer, "utf8")
      : Buffer.from(buffer);
  return createHash("sha256").update(b).digest("hex");
}
