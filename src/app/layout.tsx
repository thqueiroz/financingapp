import type { Metadata } from "next";
import { Providers } from "@/providers";
import { fonts } from "@/theme/fonts";

export const metadata: Metadata = {
  title: "Financing App",
  description: "Financing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.faunaOne.variable}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
