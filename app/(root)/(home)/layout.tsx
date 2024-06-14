import React, { ReactNode } from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bright Sparks Connect",
  description: "Created by Bright Sparks Academy for all students and teachers to connect and collaborate.",
  icons: {
    icon: '/icons/logo.png',
  }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative'>
        <Navbar />

        <div className='flex'>
            <Sidebar />

            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                <div className="w-full">
                    {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout