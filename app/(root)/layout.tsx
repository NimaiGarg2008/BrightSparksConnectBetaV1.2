import StreamVideoProvider from '@/providers/StreamClientProvider'
import { StreamVideo } from '@stream-io/video-react-sdk'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Bright Sparks Connect",
  description: "Created by Bright Sparks Academy for all students and teachers to connect and collaborate.",
  icons: {
    icon: '/icons/logo.svg',
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
    
  )
}

export default RootLayout