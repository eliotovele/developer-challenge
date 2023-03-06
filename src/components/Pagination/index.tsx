import { PaginationContainer, PaginationItem } from '../ui/Pagination';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <PaginationContainer>
      <div>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </div>

      <div className="hidden space-x-0.5 md:flex">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onClick={() => onPageChange(1)}>{1}</PaginationItem>
            {currentPage > 2 + siblingsCount && (
              <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-sm font-medium text-gray-600">
                ...
              </p>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => {
            return (
              <PaginationItem onClick={() => onPageChange(page)} key={page}>
                {page}
              </PaginationItem>
            );
          })}

        <PaginationItem onClick={() => onPageChange(currentPage)} isCurrent>
          {currentPage}
        </PaginationItem>

        {nextPages.length > 0 &&
          nextPages.map(page => {
            return (
              <PaginationItem onClick={() => onPageChange(page)} key={page}>
                {page}
              </PaginationItem>
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-sm font-medium text-gray-600">
                ...
              </p>
            )}
            <PaginationItem onClick={() => onPageChange(lastPage)}>
              {lastPage}
            </PaginationItem>
          </>
        )}
      </div>
    </PaginationContainer>
  );
}
