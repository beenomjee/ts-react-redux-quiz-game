export default function randomSortArray(arr: string[]): string[] {
  return [...arr.sort(() => Math.random() - 0.5)];
}
