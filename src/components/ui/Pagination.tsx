import { styled } from '@slicknode/stylemapper';

export const PaginationContainer = styled('div', 'flex justify-between  px-3 py-4 border-t border-gray-200');

export const PaginationItem = styled(
  'span',
  'flex justify-center items-center h-3.5 w-3.5 cursor-pointer rounded-md font-medium p-4',
  {
    variants: {
      isCurrent: {
        true: 'bg-gray-100 text-gray-600',
      },
    },
  }
);