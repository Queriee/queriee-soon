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
      <main className="mx-auto max-w-6xl px-3 sm:px-4">
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-24">
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
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">

            Something amazing is coming. Stay tuned for the future of data analytics.
          </motion.p>

        </div>


      </section>

      {/* Connectors loop */}
      <section className="mt-16 md:mt-24">
        <div className="text-center text-muted-foreground !text-xl">Connects with your favorite tools</div>
        <div className="mt-6 h-28 md:h-40 relative">
          <LogoLoop
            logos={[
            { node: <SiGooglesheets className="h-10 w-10" />, title: "Google Sheets", href: "https://www.google.com/sheets/about/" },
            { node: <SiGooglecalendar className="h-10 w-10" />, title: "Google Calendar", href: "https://calendar.google.com" },
            { node: <SiGoogletasks className="h-10 w-10" />, title: "Google Tasks", href: "https://tasks.google.com" },
            { node: <SiGoogleforms className="h-10 w-10" />, title: "Google Forms", href: "https://docs.google.com/forms" },
            { node: <SiNotion className="h-10 w-10" />, title: "Notion", href: "https://www.notion.so" },
            { node: <SiPostgresql className="h-10 w-10" />, title: "Postgres", href: "https://www.postgresql.org" }]
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
      </section>

      {/* Features heading */}
      <h2 id="features" className="mt-16 md:mt-24 text-center text-2xl tracking-tight scroll-mt-24 !font-bold md:!text-[35px]">Explore Features</h2>

      {/* Features section */}
      <section className="mt-16 text-center">
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
                Our proprietary engine connects to any data source and runs cross-source SQL queries in real-time. No ETL pipelines, no data warehouses needed.
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
    </main>

    {/* Simple Footer */}
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © 2024 Queriee. All rights reserved.
        </p>
      </div>
    </footer>
  </>
  );
}
