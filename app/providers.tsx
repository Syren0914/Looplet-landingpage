import { ThemeProvider } from "next-themes";
import { StaticThemeProvider } from "../context/static-theme-provider";
import { TooltipProvider } from "../common/tooltip";
import { StaticTheme } from "../lib/static-data";

export function Providers({ children, theme }: { children: React.ReactNode; theme: StaticTheme }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <StaticThemeProvider theme={theme} />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
