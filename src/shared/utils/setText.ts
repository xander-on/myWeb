

export const capitalizeFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncateText = (description: string, numberOfCharacters: number) => {
  return description.length > numberOfCharacters
    ? description.substring(0, numberOfCharacters) + '...'
    : description;
}