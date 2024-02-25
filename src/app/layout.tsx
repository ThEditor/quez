import "~/styles/globals.css";

import { Inter } from "next/font/google";

import SessionProvider from "~/components/SessionProvider";
import { getServerAuthSession } from "~/server/auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Quez",
  description: "MCQ App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
