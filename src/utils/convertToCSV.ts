import type { Item } from '../models';

export const convertToCSV = (items: Item[]) => {
  if (items.length === 0) return '';

  const headers = Object.keys(items[0]).join(',');
  const rows = items.map((item) =>
    Object.values(item)
      .map((value) => `"${String(value).replace(/"/g, '""')}"`)
      .join(',')
  );

  return [headers, ...rows].join('\n');
};
