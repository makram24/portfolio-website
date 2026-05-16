async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  if (!globalThis.crypto?.subtle) {
    throw new Error(
      "3D character requires a secure context (use HTTPS on your domain)."
    );
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${url} (${response.status})`);
  }

  const encryptedData = await response.arrayBuffer();
  if (encryptedData.byteLength < 17) {
    throw new Error(`Invalid encrypted model at ${url}`);
  }
  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);
  return crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
};
