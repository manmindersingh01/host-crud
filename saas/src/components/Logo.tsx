import logo from "@/images/logo/logo.svg"
import Link from "next/link"
import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
const Logo = () => {
  return (
    <Link href={'/'} prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-14 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            src={logo}
            alt="logo"
            priority
            className="dark:filter dark:invert"
          ></Image>

        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo