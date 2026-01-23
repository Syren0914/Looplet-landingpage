"use client";

import { useGSAP } from "@gsap/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useMemo, useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";

gsap.registerPlugin(SplitText);

interface ShaderPlaneProps {
	vertexShader: string;
	fragmentShader: string;
	uniforms: { [key: string]: { value: unknown } };
}

function ShaderPlane({
	vertexShader,
	fragmentShader,
	uniforms,
}: ShaderPlaneProps) {
	const meshRef = useRef<THREE.Mesh>(null);
	const { size } = useThree();

	useFrame((state) => {
		if (meshRef.current) {
			const material = meshRef.current.material as THREE.ShaderMaterial;
			material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
			material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
		}
	});

	return (
		<mesh ref={meshRef}>
			<planeGeometry args={[2, 2]} />
			<shaderMaterial
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={uniforms}
				side={THREE.DoubleSide}
				depthTest={false}
				depthWrite={false}
			/>
		</mesh>
	);
}

interface ShaderBackgroundProps {
	vertexShader?: string;
	fragmentShader?: string;
	uniforms?: { [key: string]: { value: unknown } };
	className?: string;
}

function ShaderBackground({
	vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
	fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;

    // -13 thanks to Nguyen2007 ⚡
    void main() {
        vec2 u = vUv * u_resolution.xy;
        vec2 v = u_resolution.xy;
        u = .5*(u+u-v)/v.y;    
         
        vec4 z = gl_FragColor = vec4(1,2,3,0);
         
        for (float a = .5, t = u_time, i; 
             ++i < 19.; 
             gl_FragColor += (1. + cos(z+t)) 
                / length((1.+i*dot(v,v)) 
                       * sin(1.5*u/(.5-dot(u,u)) - 9.*u.yx + t))
             )  
            v = cos(++t - 7.*u*pow(a += .03, i)) - 5.*u, 
            u += tanh(40. * dot(u *= mat2(cos(i + .02*t - vec4(0,11,33,0)))
                               ,u)
                          * cos(1e2*u.yx + t)) / 2e2
               + .2 * a * u
               + cos(4./exp(dot(gl_FragColor,gl_FragColor)/1e2) + t) / 3e2;
                  
         gl_FragColor = 25.6 / (min(gl_FragColor, 13.) + 164. / gl_FragColor) 
           - dot(u, u) / 250.;
    }
  `,
	uniforms = {},
	className = "w-full h-full",
}: ShaderBackgroundProps) {
	const shaderUniforms = useMemo(
		() => ({
			u_time: { value: 0 },
			u_resolution: { value: new THREE.Vector3(1, 1, 1) },
			...uniforms,
		}),
		[uniforms],
	);

	return (
		<div className={className}>
			<Suspense fallback={<div className="w-full h-full bg-black" />}>
				<Canvas 
					className={className}
					gl={{ 
						antialias: true,
						alpha: true,
						powerPreference: "high-performance"
					}}
					dpr={[1, 2]}
					frameloop="always"
				>
					<ShaderPlane
						vertexShader={vertexShader}
						fragmentShader={fragmentShader}
						uniforms={shaderUniforms}
					/>
				</Canvas>
			</Suspense>
		</div>
	);
}

export default function InfiniteHero() {
	const rootRef = useRef<HTMLDivElement>(null);
	const bgRef = useRef<HTMLDivElement>(null);
	const h1Ref = useRef<HTMLHeadingElement>(null);
	const pRef = useRef<HTMLParagraphElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useGSAP(
		() => {
			const ctas = ctaRef.current ? Array.from(ctaRef.current.children) : [];

			const h1Split = new SplitText(h1Ref.current, { type: "lines" });
			const pSplit = new SplitText(pRef.current, { type: "lines" });

			gsap.set(bgRef.current, { filter: "blur(28px)" });
			gsap.set(h1Split.lines, {
				opacity: 0,
				y: 24,
				filter: "blur(8px)",
			});
			gsap.set(pSplit.lines, {
				opacity: 0,
				y: 16,
				filter: "blur(6px)",
			});
			if (ctas.length) gsap.set(ctas, { opacity: 0, y: 16 });

			const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
			tl.to(bgRef.current, { filter: "blur(0px)", duration: 1.2 }, 0)
				.to(
					h1Split.lines,
					{
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.8,
						stagger: 0.1,
					},
					0.3,
				)
				.to(
					pSplit.lines,
					{
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.6,
						stagger: 0.08,
					},
					"-=0.3",
				)
				.to(ctas, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");

			return () => {
				h1Split.revert();
				pSplit.revert();
			};
		},
		{ scope: rootRef },
	);

	return (
		<div
			ref={rootRef}
			className="relative h-svh w-full overflow-hidden bg-black text-white"
		>
			<div className="fixed inset-0 z-0" ref={bgRef} style={{ willChange: 'transform' }}>
				{isClient ? (
					<Suspense fallback={<div className="h-full w-full bg-gradient-to-br from-gray-900 to-black" />}>
						<ShaderBackground className="h-full w-full" />
					</Suspense>
				) : (
					<div className="h-full w-full bg-gradient-to-br from-gray-900 to-black" />
				)}
			</div>

			<div className="pointer-events-none fixed inset-0 z-10 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_black_100%)]" />

			<div className="relative z-20 flex h-svh w-full items-center justify-center px-6">
				<div className="text-center">
					<h1
						ref={h1Ref}
						className="mx-auto max-w-2xl lg:max-w-4xl text-[clamp(2.25rem,6vw,4rem)] font-extralight leading-[0.95] tracking-tight"
					>
						The road dissolves in light, the horizon remains unseen.
					</h1>
					<p
						ref={pRef}
						className="mx-auto mt-4 max-w-2xl md:text-balance text-sm/6 md:text-base/7 font-light tracking-tight text-white/70"
					>
						Minimal structures fade into a vast horizon where presence and
						absence merge. A quiet tension invites the eye to wander without
						end.
					</p>

					<div
						ref={ctaRef}
						className="mt-8 flex flex-row items-center justify-center gap-4"
					>
						<button
							type="button"
							className="group relative overflow-hidden border border-white/30 bg-gradient-to-r from-white/20 to-white/10 px-4 py-2 text-sm rounded-lg font-medium tracking-wide text-white backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-white/50 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 cursor-pointer"
						>
							Learn more
						</button>

						<button
							type="button"
							className="group relative px-4 py-2 text-sm font-medium tracking-wide text-white/90 transition-[filter,color] duration-500 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer"
						>
							View portfolio
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
