import { useState, useMemo, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme } from './ThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};