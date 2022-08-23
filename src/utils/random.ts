/**
 * generate random number from given two value
 *
 * @param min number
 * @param max number
 * @returns
 */
export function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}
