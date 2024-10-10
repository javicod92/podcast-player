// This function can be used in song or playlist views and likes
export default function convertNumber(number: number) {
  if (number >= 1_000_000) {
    const result = number / 1_000_000;
    return `${result % 1 === 0 ? result.toFixed(0) : result.toFixed(1)}M`;
  }

  if (number >= 1_000) {
    const result = number / 1_000;
    return `${result % 1 === 0 ? result.toFixed(0) : result.toFixed(1)}K`;
  }

  return `${number}`;
}
