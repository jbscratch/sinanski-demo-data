const text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
export const loremIpsum = (length?: number, ending?: string) => {
  // If the ending is a '.' or a '...' the possible ending dot of the lorem ipsum text is removed, just for a nicer look.
  let substring = text.substring(0, length).trim();
  if (ending && ending.startsWith('.')) {
    substring = removeEndingDot(substring);
  }

  return substring + (ending || '')
};

const removeEndingDot = (text: string) => text.endsWith('.')
  ? text.slice(0, -1)
  : text;

