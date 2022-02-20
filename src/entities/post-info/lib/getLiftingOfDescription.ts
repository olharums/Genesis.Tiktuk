export const getLiftingOfDescription = (text: string): number => {
  if (text && text.length) {
    if (text.length === 0) return 30;
    if (text.length <= 40) return 80;
    if (text.length <= 70) return 80;
    return 130;
  }
  return 30;
};
