const HTTP_PROTOCOLS = new Set(["http:", "https:"]);
const CONTRACT_ADDRESS = /^0x[a-fA-F0-9]{40}$/;

/** Returns the configured URL only when it is an absolute http(s) address. */
export function officialHttpUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    if (!HTTP_PROTOCOLS.has(url.protocol)) return null;
    return trimmed;
  } catch {
    return null;
  }
}

/** Returns a checksum-agnostic Ethereum address, or null when it is not publishable. */
export function configuredContractAddress(value: string): string | null {
  const trimmed = value.trim();
  if (!CONTRACT_ADDRESS.test(trimmed)) return null;
  return trimmed;
}
