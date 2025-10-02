"use client";

import Link from "next/link";
import Image from "next/image";

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="ml-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/queriee-logo.png"
              alt="Queriee"
              width={70}
              height={18}
              className="h-4 w-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
