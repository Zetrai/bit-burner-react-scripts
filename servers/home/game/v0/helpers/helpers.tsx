export const formatMoney = (amount: number): string => {
  if (amount >= 1e9) return (amount / 1e9).toFixed(2) + 'B';
  if (amount >= 1e6) return (amount / 1e6).toFixed(2) + 'M';
  if (amount >= 1e3) return (amount / 1e3).toFixed(2) + 'K';
  return amount.toString();
};

export const formatRam = (ram: number): string => {
  if (ram >= 1) return ram.toFixed(2) + ' GB';
  return (ram * 1024).toFixed(0) + ' MB';
};
