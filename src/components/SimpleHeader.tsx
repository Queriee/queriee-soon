"use client";

import Link from "next/link";
import Image from "next/image";

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/queriee-logo.png"
            alt="Queriee"
            width={90}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
