export const getLiftingOfDescription = (text: string): number => {
  if (text && text.length) {
    if (text.length <= 70) return 80;
    return 130;
  }
  return 30;
};
