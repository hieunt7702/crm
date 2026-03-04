import { Button } from '../ui/Button';
import { Dropdown, DropdownSection } from '../ui/Dropdown';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize = 10,
  onPageChange,
  onPageSizeChange
}) => {
  const PAGE_SIZE_OPTIONS: DropdownSection[] = [
    {
      items: [
        { id: '10', label: '10 per page', isActive: pageSize === 10, onClick: () => onPageSizeChange(10) },
        { id: '25', label: '25 per page', isActive: pageSize === 25, onClick: () => onPageSizeChange(25) },
        { id: '50', label: '50 per page', isActive: pageSize === 50, onClick: () => onPageSizeChange(50) },
      ]
    }
  ];

  const startIdx = (currentPage - 1) * pageSize + 1;
  const endIdx = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="shrink-0 px-8 py-4 bg-white dark:bg-bg-dark/10 flex items-center justify-between">
      {/* Left Section: Page Size & Info */}
      <div className="flex items-center gap-10">
        <Dropdown
          position="top-left"
          sections={PAGE_SIZE_OPTIONS}
          trigger={({ isOpen }) => (
            <div className={`
              flex items-center gap-2.5 px-3 h-8 rounded-md border transition-all cursor-pointer group
              ${isOpen
                ? 'border-primary-600 text-primary bg-primary/[0.04] shadow-primary/5'
                : 'bg-transparent border-transparent text-neutral-500 dark:text-neutral-400 hover:border-primary/30 hover:text-primary hover:bg-primary/[0.01]'}
            `}>
              <span className="text-[12px] font-bold">Show {pageSize}</span>
              <span className={`material-symbols-outlined !text-[16px] transition-all duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-neutral-400 group-hover:text-primary'}`}>expand_more</span>
            </div>
          )}
        />

        <div className="flex items-center gap-2.5 h-6">
          <div className="w-[1px] h-full bg-border-light dark:bg-white/5 -ml-2 mr-2"></div>
          <div className="text-[12px] text-neutral-500 font-medium flex items-center gap-1.5 tracking-tight">
            <span className="opacity-60">Displaying</span>
            <span className="flex items-center gap-1.5 bg-neutral-100/80 dark:bg-white/[0.05] px-2.5 py-1 rounded-md text-neutral-900 dark:text-neutral-100 font-bold border border-border-light dark:border-white/5">
              {totalItems > 0 ? startIdx : 0} <span className="text-neutral-400 font-normal opacity-50">–</span> {endIdx}
            </span>
            <span className="opacity-60">of</span>
            <span className="text-neutral-900 dark:text-white font-bold decoration-primary/30 decoration-2 underline-offset-4">{totalItems}</span>
            <span className="opacity-60 ml-0.5">staff members</span>
          </div>
        </div>
      </div>

      {/* Right Section: Navigation Controls */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          size="sm"
          icon="chevron_left"
        >
          Previous
        </Button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1 mx-2">
          {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`
                size-8 rounded-md text-[12px] font-bold transition-all active:scale-90
                ${i + 1 === currentPage
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-neutral-500 hover:text-primary hover:bg-primary/5 hover:border-primary/30 border border-transparent dark:text-neutral-400'}
              `}
            >
              {i + 1}
            </button>
          ))}
          {totalPages > 5 && (
            <>
              <span className="text-neutral-300 dark:text-neutral-700 px-1 font-bold">···</span>
              <button
                onClick={() => onPageChange(totalPages)}
                className={`
                  size-8 rounded-md text-[12px] font-bold transition-all active:scale-90
                  ${totalPages === currentPage
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-neutral-500 hover:text-primary hover:bg-primary/5 hover:border-primary/30 border border-transparent'}
                `}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        {/* Next Button */}
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          size="sm"
        >
          <span>Next</span>
          <span className="material-symbols-outlined !text-[18px]">chevron_right</span>
        </Button>
      </div>
    </div>
  );
};
