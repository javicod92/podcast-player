// This function can be used in song or playlist views and likes
export default function convertNumber (number: number) {
  if (number < 1000) return `${number}`;
  if (number < 1000000) return `${Math.round(number / 1000)}K`;
  if (number >= 1000000) return `${Math.round(number / 1000000)}M`
}