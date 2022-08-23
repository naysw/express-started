/**
 * generate relative image url
 *
 * @param fileName string
 * @returns string
 */
export function generateImageUrl(fileName: string) {
  return `${process.env.APP_URL}/images/${fileName}`;
}
