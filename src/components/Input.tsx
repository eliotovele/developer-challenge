import { styled } from '@slicknode/stylemapper';

export const Input = styled(
  'input',
  'flex flex-row items-center w-full py-2.5 px-3.5 h-11 gap-8 bg-white border border-gray-300 shadow rounded-lg text-gray-900 placeholder:text-gray-500 font-normal text-base focus:border-indigo-300 focus:ring focus:ring-indigo-100 focus:outline-none',
  {
    variants: {
      disabled: {
        true: 'bg-gray-50 pointer-events-none',
      },
    },
  }
);
