import {useState, useMemo, useEffect, type PropsWithChildren} from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme } from './ThemeContext';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
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