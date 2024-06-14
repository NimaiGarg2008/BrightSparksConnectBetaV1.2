import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Sparks Connect",
  description: "Created by Bright Sparks Academy for all students and teachers to connect and collaborate.",
  icons: {
    icon: '/icons/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/logo.png',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorText: '#000',
            colorPrimary: '#000',
            colorBackground: '#fff',
            colorInputBackground: "#fff",
            colorInputText: '#000',
            },
          }
        }
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
          </body>
      </ClerkProvider>
    </html>
  );
}
