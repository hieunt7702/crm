import React, { useEffect, useRef, useState } from 'react';

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
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  sections,
  position = 'top-right',
  className = '',
  closeOnSelect = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const positionClasses = {
    'top-left': 'bottom-full left-0 mb-2 origin-bottom-left',
    'top-right': 'bottom-full right-0 mb-2 origin-bottom-right',
    'bottom-left': 'top-full left-0 mt-2 origin-top-left',
    'bottom-right': 'top-full right-0 mt-2 origin-top-right'
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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
        {sections.map((section, sIdx) => (
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
                      setIsOpen(false);
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
            {section.hasDivider && <div className="h-[1px] bg-border-light dark:bg-menu-border my-1 mx-1"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
