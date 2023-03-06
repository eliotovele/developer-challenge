import { styled } from '@slicknode/stylemapper';

export const Table = styled('table', 'min-w-full divide-y divide-gray-300');

export const TableHead = styled('thead', 'bg-gray-50');

export const TableRow = styled('tr');

export const TableHeader = styled(
  'th',
  'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
);

export const TableBody = styled('tbody', 'divide-y divide-gray-200 bg-white');

export const TableCell = styled(
  'td',
  'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
);
