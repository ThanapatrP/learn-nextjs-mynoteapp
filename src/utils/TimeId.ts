export function generateRandomTimeId() {
  const timestamp = Date.now().toString(36);
  const randomness = Math.random().toString(36).substring(2, 9);
  return `${timestamp}-${randomness}`;
}
