export const isValidUrl = (string: string) => {
  try {
    new URL(string);
    return true;
//   eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return false;
  }
};