export const addThousandSeparator = (
  number: number,
  thousand_separator = '.'
): string =>
  number
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, thousand_separator);

export const price = (number: number) => {
  const euros = addThousandSeparator(number);
  const cents = number.toFixed(2).split('.')[1];
  return `${euros},${cents} €`
}