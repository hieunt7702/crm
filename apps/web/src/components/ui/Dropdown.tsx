import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

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
  menuClassName?: string;
  menuWidthClassName?: string;
  closeOnSelect?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  sections,
  position = 'top-right',
  className = '',
  menuClassName = '',
  menuWidthClassName = 'w-52',
  closeOnSelect = true,
  searchable = false,
  searchPlaceholder = 'Search...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    if (searchable) {
      setSearchQuery('');
    }
  }, [searchable]);

  const updateMenuPosition = useCallback(() => {
    if (!isOpen || !containerRef.current || !menuRef.current) {
      return;
    }

    const triggerRect = containerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    const offset = 8;

    let top = 0;
    let left = 0;

    if (position === 'top-left') {
      top = triggerRect.top - menuRect.height - offset;
      left = triggerRect.left;
    } else if (position === 'top-right') {
      top = triggerRect.top - menuRect.height - offset;
      left = triggerRect.right - menuRect.width;
    } else if (position === 'bottom-left') {
      top = triggerRect.bottom + offset;
      left = triggerRect.left;
    } else {
      top = triggerRect.bottom + offset;
      left = triggerRect.right - menuRect.width;
    }

    const viewportPadding = 8;
    const maxLeft = window.innerWidth - menuRect.width - viewportPadding;
    const maxTop = window.innerHeight - menuRect.height - viewportPadding;

    setMenuPosition({
      top: Math.min(Math.max(top, viewportPadding), Math.max(maxTop, viewportPadding)),
      left: Math.min(Math.max(left, viewportPadding), Math.max(maxLeft, viewportPadding)),
    });
  }, [isOpen, position]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        containerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }

      closeDropdown();
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

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    updateMenuPosition();
  }, [isOpen, updateMenuPosition, filteredSections.length, searchQuery]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleReposition = () => {
      updateMenuPosition();
    };

    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);

    return () => {
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
    };
  }, [isOpen, updateMenuPosition]);

  const dropdownPanel = (
    <div
      ref={menuRef}
      style={{ top: menuPosition.top, left: menuPosition.left }}
      className={`
        fixed z-[140] py-1.5 ${menuWidthClassName}
        bg-white dark:bg-neutral-900
        border border-border-light dark:border-white/10
        rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.32)]
        will-change-transform
        transition-[opacity,transform] duration-200 ease-[var(--ease-apple)]
        ${isOpen
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-[0.98] translate-y-1 pointer-events-none'}
        ${menuClassName}
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
  );

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {typeof trigger === 'function' ? trigger({ isOpen }) : trigger}
      </div>

      {typeof document !== 'undefined' && createPortal(dropdownPanel, document.body)}
    </div>
  );
};
