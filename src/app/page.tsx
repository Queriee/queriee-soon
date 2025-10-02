"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PixelBlast } from "@/components/PixelBlast";
import { LogoLoop } from "@/components/LogoLoop";
import { SiGooglesheets, SiGooglecalendar, SiPostgresql, SiNotion, SiGoogletasks, SiGoogleforms } from "react-icons/si";
import { ShinyText } from "@/components/ShinyText";

const logos = [
{ name: "Stripe", slug: "stripe", color: "6772e5" },
{ name: "Slack", slug: "slack", color: "611f69" },
{ name: "Linear", slug: "linear", color: "5E6AD2" },
{ name: "Vercel", slug: "vercel", color: "000000" },
{ name: "Notion", slug: "notion", color: "000000" },
{ name: "Postgres", slug: "postgresql", color: "4169E1" }];


const features = [
{
  title: "Build flows in minutes",
  desc: "Drag simple steps together to automate your day. Minimal UI, maximum clarity."
},
{
  title: "Powerful connectors",
  desc: "Google, Postgres, Notion and more — authenticated and ready to go."
},
{
  title: "Observe & retry",
  desc: "See every run with friendly logs. Retry failures with one click."
}];


export default function LandingPage() {
  const reduceMotion = useReducedMotion();
  return (
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
            fadeOutColor="var(--background)"
            ariaLabel="Connector brands" />

        </div>
      </section>

      {/* Features heading */}
      <h2 id="features" className="mt-16 md:mt-24 text-center text-2xl tracking-tight scroll-mt-24 !font-bold md:!text-[35px]">Explore Features</h2>

      {/* Features section */}
      <section className="mt-6 text-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Features that stay out of your way
            </h3>
            <p className="text-muted-foreground">Design flows in minutes, connect powerful services, and monitor runs with friendly logs. Minimal UI, maximum clarity.</p>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc pl-5 text-left max-w-md mx-auto">
              <li>Drag-and-drop steps with type-safe inputs</li>
              <li>Google, Postgres, Notion connectors, and more</li>
              <li>Retry failed runs and inspect logs in real-time</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Operate with confidence
            </h3>
            <p className="text-muted-foreground">Transparent run logs, observability, and graceful retries out of the box. Get notified and fix issues fast.</p>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc pl-5 text-left max-w-md mx-auto">
              <li>Live run timeline and step-level logs</li>
              <li>One-click retry with idempotency</li>
              <li>Type-safe inputs and outputs</li>
            </ul>
          </div>
        </div>
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
    </main>);

}
