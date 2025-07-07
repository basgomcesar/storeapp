import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@lib/constants";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* next-themes manipulará la class aquí */}
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableColorScheme enableSystem disableTransitionOnChange>
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}