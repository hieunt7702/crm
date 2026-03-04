/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = 'app-theme';
const THEME_TRANSITION_CLASS = 'theme-transition';
const THEME_TRANSITION_DURATION_MS = 280;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
  } catch {
    // Fall through to system preference.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyThemeClass = (theme: Theme) => {
  const root = document.documentElement;
  const isDark = theme === 'dark';

  root.classList.toggle('dark', isDark);
  root.setAttribute('data-theme', theme);
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const animateNextChangeRef = useRef(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const shouldAnimate =
      animateNextChangeRef.current &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    animateNextChangeRef.current = false;

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    if (shouldAnimate) {
      root.classList.add(THEME_TRANSITION_CLASS);
      transitionTimeoutRef.current = window.setTimeout(() => {
        root.classList.remove(THEME_TRANSITION_CLASS);
        transitionTimeoutRef.current = null;
      }, THEME_TRANSITION_DURATION_MS);
    }

    applyThemeClass(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write failures (privacy mode / restricted environments).
    }
  }, [theme]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      document.documentElement.classList.remove(THEME_TRANSITION_CLASS);
    };
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState((prevTheme) => {
      if (prevTheme === nextTheme) {
        animateNextChangeRef.current = false;
        return prevTheme;
      }

      animateNextChangeRef.current = true;
      return nextTheme;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      setTheme,
      toggleTheme
    }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
