import type { Metadata, Viewport } from "next";

import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

import URLSectionTracker from "@/components/URLSectionTracker/URLSectionTraker";

import "@/styles/main.scss";

const roboto = Roboto({ subsets: ["latin", "cyrillic", "vietnamese"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dikhtyar.dev"),
  title: {
    default: "Danil Dikhtyar | Software Engineer",
    template: "%s | Danil Dikhtyar",
  },
  applicationName: "Dikhtyar.dev",
  authors: { name: "Danil Dikhtyar", url: "https://dikhtyar.dev" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f9fa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Toaster />
        <URLSectionTracker />

        {children}
      </body>
    </html>
  );
}
