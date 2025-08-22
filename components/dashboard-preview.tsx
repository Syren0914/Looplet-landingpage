import Image from "next/image" // Import the Image component
import { ContainerScroll } from "./ui/container-scroll-animation"

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px] o">
      <ContainerScroll
        titleComponent={<h1 ></h1>}
      >
        <img src="/hero.png" alt="hero" className="w-full h-full object-cover object-fill object-contain rounded-2xl" />
      </ContainerScroll>
    </div>
  )
}
