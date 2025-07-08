import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const ThemeContext = createContext();

export const useThemeMode = () => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useThemeMode must be used within a ThemeProvider');
   }
   return context;
};

export const ThemeContextProvider = ({ children }) => {
   const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');
   const [mode, setMode] = useState(() => {
      // Check if user has a saved preference, otherwise use system preference
      const savedMode = localStorage.getItem('themeMode');
      if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
         return savedMode;
      }
      return systemPrefersDark ? 'dark' : 'light';
   });

   // Update mode when system preference changes (if user hasn't manually set a preference)
   useEffect(() => {
      const savedMode = localStorage.getItem('themeMode');
      if (!savedMode) {
         setMode(systemPrefersDark ? 'dark' : 'light');
      }
   }, [systemPrefersDark]);

   const toggleTheme = () => {
      const newMode = mode === 'light' ? 'dark' : 'light';
      setMode(newMode);
      localStorage.setItem('themeMode', newMode);
   };

   const resetToSystem = () => {
      localStorage.removeItem('themeMode');
      setMode(systemPrefersDark ? 'dark' : 'light');
   };

   const value = {
      mode,
      toggleTheme,
      resetToSystem,
      isSystemDark: systemPrefersDark,
   };

   return (
      <ThemeContext.Provider value={value}>
         {children}
      </ThemeContext.Provider>
   );
};
