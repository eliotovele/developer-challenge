import { styled } from '@slicknode/stylemapper';

export const Button = styled(
  'button',
  'inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto',
  {
    variants: {
      color: {
        green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
        red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        black: 'bg-black hover:bg-gray-800 focus:ring-gray-500',
      },
    },
    defaultVariants: {
      color: 'green',
    },
  }
);
