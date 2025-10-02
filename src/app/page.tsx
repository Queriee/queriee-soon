"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-3 sm:px-4">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src="/queriee-logo.png" 
              alt="Queriee" 
              width={150} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Coming Soon
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
            Something amazing is coming. Stay tuned for the future of data analytics.
          </p>
        </div>
      </section>
    </main>
  );
}
