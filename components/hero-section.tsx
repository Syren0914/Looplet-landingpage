import React from "react"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import { ShaderAnimation } from "./shader-animation"
import Header from "./header"
import NexusOrb from "./nexusorb"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative  rounded-2xl overflow-hidden  py-0 
         w-full h-[400px]  md:h-[600px] lg:h-[810px] md:px-0"
    >
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">

      <ShaderAnimation/>
      <NexusOrb/>
      </div>
      

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
          Unleash the Power of AI Agents
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto">
          Accelerate your development workflow with intelligent AI agents that write, review, and optimize your code.
        </p>
      </div>

      <Link href="https://vercel.com/home" target="_blank" rel="noopener noreferrer">
        <Button className="relative z-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10">
          Signup for free
        </Button>
      </Link>
    </section>
  )
}
