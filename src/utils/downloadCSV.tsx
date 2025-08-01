export const downloadCSV = (csv: string, count: number) => {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.setAttribute('download', `${count}_items.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
