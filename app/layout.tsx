
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Newsletter } from "./_sections/newsletter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { defaultStaticData } from "@/lib/static-data";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
});

export const dynamic = "force-static";
export const revalidate = 30;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Use static data instead of Basehub queries
  const { settings, header, footer } = defaultStaticData;

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-[--surface-primary] text-[--text-primary] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Providers theme={settings.theme}>
          {/* Header */}
          <Header logo={settings.logo} header={header} />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Newsletter newsletter={footer.newsletter} />
          {/* Footer */}
          <Footer footer={footer} logo={settings.logo} />
        </Providers>
      </body>
    </html>
  );
}


