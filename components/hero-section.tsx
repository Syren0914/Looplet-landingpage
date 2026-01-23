import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "./header"
import { Component } from "./raycast-background"
import InfiniteHero from "./infinite-hero"

export function HeroSection() {
  return (
    <div>
      
    <Header/>
    <InfiniteHero />
    </div>
  )
}
