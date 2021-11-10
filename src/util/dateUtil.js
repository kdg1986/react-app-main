import { parse } from 'date-fns';

export * from 'date-fns';
export const StringToDate = (dateStr) =>
  parse(dateStr.replace(/[^0-9]/g, ''), 'yyyyMMdd', new Date());
