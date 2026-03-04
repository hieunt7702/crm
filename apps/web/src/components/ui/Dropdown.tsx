import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface DropdownItem {
  id: string;
  label: string;
  icon?: string;
  onClick?: () => void;
  isActive?: boolean;
  variant?: 'default' | 'danger';
}

export interface DropdownSection {
  label?: string;
  items: DropdownItem[];
  hasDivider?: boolean;
}

interface DropdownProps {
  trigger: React.ReactNode | ((props: { isOpen: boolean }) => React.ReactNode);
  sections: DropdownSection[];
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  closeOnSelect?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  sections,
  position = 'top-right',
  className = '',
  closeOnSelect = true,
  searchable = false,
  searchPlaceholder = 'Search...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    if (searchable) {
      setSearchQuery('');
    }
  }, [searchable]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeDropdown]);

  const positionClasses = {
    'top-left': 'bottom-full left-0 mb-2 origin-bottom-left',
    'top-right': 'bottom-full right-0 mb-2 origin-bottom-right',
    'bottom-left': 'top-full left-0 mt-2 origin-top-left',
    'bottom-right': 'top-full right-0 mt-2 origin-top-right'
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      const nextOpen = !prev;
      if (nextOpen && searchable) {
        setSearchQuery('');
      }
      return nextOpen;
    });
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredSections = normalizedQuery
    ? sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.label.toLowerCase().includes(normalizedQuery))
      }))
      .filter((section) => section.items.length > 0)
    : sections;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {typeof trigger === 'function' ? trigger({ isOpen }) : trigger}
      </div>

      <div
        className={`
          absolute z-[100] w-52 py-1.5
          bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl
          border border-white/20 dark:border-white/10
          rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]
          will-change-transform
          transition-[opacity,transform] duration-200 ease-[var(--ease-apple)]
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-[0.98] translate-y-1 pointer-events-none'}
          ${positionClasses[position]}
        `}
      >
        {searchable && (
          <div className="px-2 pb-1">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 !text-[16px] text-neutral-400">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={searchPlaceholder}
                className="w-full h-8 rounded-md bg-neutral-50 dark:bg-white/[0.04] border border-border-light dark:border-white/10 pl-8 pr-2 text-[12px] text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:border-primary/40"
              />
            </div>
          </div>
        )}

        {filteredSections.map((section, sIdx) => (
          <React.Fragment key={sIdx}>
            {section.label && (
              <div className="px-3 py-1 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                {section.label}
              </div>
            )}
            <div className="py-0.5">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  onClick={(event) => {
                    event.stopPropagation();
                    item.onClick?.();
                    if (closeOnSelect) {
                      closeDropdown();
                    }
                  }}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 text-[12px] transition-colors cursor-pointer
                    ${item.isActive
                      ? 'text-primary bg-primary/10 dark:bg-primary/20'
                      : item.variant === 'danger'
                        ? 'text-red-500 hover:bg-red-500/10'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5'}
                  `}
                >
                  {item.icon && <span className="material-symbols-outlined !text-[16px]">{item.icon}</span>}
                  <span className="flex-1">{item.label}</span>
                  {item.isActive && <span className="material-symbols-outlined !text-[14px]">check</span>}
                </div>
              ))}
            </div>
            {section.hasDivider && sIdx < filteredSections.length - 1 && <div className="h-[1px] bg-border-light dark:bg-menu-border my-1 mx-1"></div>}
          </React.Fragment>
        ))}

        {searchable && filteredSections.length === 0 && (
          <div className="px-3 py-2 text-[12px] text-neutral-400">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};
