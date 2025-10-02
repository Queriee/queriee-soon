"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PixelBlast } from "@/components/PixelBlast";
import { LogoLoop } from "@/components/LogoLoop";
import { SiGooglesheets, SiGooglecalendar, SiPostgresql, SiNotion, SiGoogletasks, SiGoogleforms } from "react-icons/si";
import { ShinyText } from "@/components/ShinyText";
import { SimpleHeader } from "@/components/SimpleHeader";




export default function LandingPage() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <SimpleHeader />

      {/* Hero Section - Full Viewport Height */}
      <main className="min-h-[calc(100vh-3.5rem)] flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">

              <ShinyText text="Coming Soon" className="leading-tight" />
            </motion.h1>
            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 24 }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Something amazing is coming.
            </motion.p>
          </div>

          {/* Connectors loop - Centered in viewport */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 24 }}
            className="mt-16 md:mt-24 w-full max-w-6xl">
            <div className="text-center text-muted-foreground !text-xl">Connects with your favorite tools</div>
            <div className="mt-6 h-28 md:h-40 relative">
          <LogoLoop
            logos={[
            { node: <SiGooglesheets className="h-6 w-6 md:h-10 md:w-10" />, title: "Google Sheets", href: "https://www.google.com/sheets/about/" },
            { node: <SiGooglecalendar className="h-6 w-6 md:h-10 md:w-10" />, title: "Google Calendar", href: "https://calendar.google.com" },
            { node: <SiGoogletasks className="h-6 w-6 md:h-10 md:w-10" />, title: "Google Tasks", href: "https://tasks.google.com" },
            { node: <SiGoogleforms className="h-6 w-6 md:h-10 md:w-10" />, title: "Google Forms", href: "https://docs.google.com/forms" },
            { node: <SiNotion className="h-6 w-6 md:h-10 md:w-10" />, title: "Notion", href: "https://www.notion.so" },
            { node: <SiPostgresql className="h-6 w-6 md:h-10 md:w-10" />, title: "Postgres", href: "https://www.postgresql.org" }]
            }
            speed={80}
            direction="left"
            logoHeight={56}
            gap={96}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0b0b0b"
            ariaLabel="Connector brands" />

            </div>
          </motion.div>
        </section>
      </main>

      {/* Scrollable Content Below */}
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        {/* Features section */}
        <section className="py-16 text-center">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 24 }}
          className="space-y-12"
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Queriee Engine
              </h3>
              <p className="text-muted-foreground">
                Our proprietary engine connects to any data source and runs cross-source SQL queries in real-time.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Effortless Usage
              </h3>
              <p className="text-muted-foreground">
                Connect your tools in seconds, write SQL like you always have, and get instant results. It's that simple.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="my-20 md:my-28">
        <div className="relative mx-auto max-w-6xl" style={{ height: 600 }}>
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#FFFFFF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.25}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={3}
            speed={0.35}
            edgeFade={0.25}
            transparent />

          <div
            className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4">

            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Say goodbye to ETL
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Connect sources and run cross-source SQL in seconds. No pipelines, no warehouses.
            </p>

          </div>
        </div>
      </section>
      </div>

    {/* Simple Footer */}
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Queriee. All rights reserved.
        </p>
      </div>
    </footer>
  </>
  );
}
