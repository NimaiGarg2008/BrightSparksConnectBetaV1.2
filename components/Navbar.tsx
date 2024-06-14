import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import MobileNav from './MobileNav';
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="icons/logo.svg"
          width={60} 
          height={60}
          alt="Bright Sparks Academy"
          className='max-sm:size-10'
        />
        <p className="text-[24px] font-bold text-black max-sm:hidden">Bright Sparks Connect</p>
      </Link>

      <div className="flex-between gap-5 text-black">
        <SignedIn>
          <UserButton
            appearance={{
              variables: {
                colorText: '#000',
                colorPrimary: '#000',
                colorBackground: '#fff',
                colorInputBackground: "#000",
                colorInputText: '#000',
                colorTextOnPrimaryBackground: "#000",
                colorTextSecondary: "#000",
                colorNeutral: "#000",

              }
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar