import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Get initial theme from localStorage or default to "dark"
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
      }
    }
    return "dark";
  };

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return getInitialTheme();
  });

  // Apply theme to DOM whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
        console.log("🌙 Dark mode ENABLED - HTML classes:", root.className);
      } else {
        root.classList.remove("dark");
        console.log("☀️ Light mode ENABLED - HTML classes:", root.className);
      }
      // Save to localStorage
      localStorage.setItem("theme", theme);

      // Verify the class was applied
      setTimeout(() => {
        const hasDark = root.classList.contains("dark");
        console.log(
          `Verification: dark class present = ${hasDark}, theme = ${theme}`
        );
      }, 100);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme;
    });
  }, []);

  // Memoize the context value to ensure proper re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
