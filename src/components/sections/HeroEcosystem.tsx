import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion'
import {
  BrainCircuit,
  Cloud,
  CodeXml,
  Database,
  Globe,
  Infinity as InfinityIcon,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'

/*
 * Everything is laid out on a fixed 1440 x 900 stage, centered on the hero, so the SVG curves and the
 * HTML nodes share one coordinate system. The hero text sits roughly between x 272-1168 / y 190-640;
 * nodes stay in the side gutters (still visible at a 1280px viewport, where the stage is clipped to x 80-1360).
 */
const W = 1440
const H = 900
const CX = 720
const CY = 420

type EcoNode = {
  label: string
  icon: LucideIcon
  x: number
  y: number
  /** Parallax travel in px at the edge of the screen */
  depth: number
  /** Float cycle length in seconds */
  float: number
}

// The flow reads Web -> Mobile -> AI down the left, sweeps under the CTAs, then Data -> Cloud -> DevOps -> Software up the right
const nodes: EcoNode[] = [
  { label: 'Web Development', icon: Globe, x: 200, y: 215, depth: 14, float: 8 },
  { label: 'Mobile Apps', icon: Smartphone, x: 165, y: 395, depth: 20, float: 9.5 },
  { label: 'AI', icon: BrainCircuit, x: 300, y: 565, depth: 11, float: 7.5 },
  { label: 'Data', icon: Database, x: 1145, y: 595, depth: 12, float: 8.5 },
  { label: 'Cloud', icon: Cloud, x: 1295, y: 455, depth: 19, float: 10 },
  { label: 'DevOps', icon: InfinityIcon, x: 1245, y: 305, depth: 15, float: 7 },
  { label: 'Custom Software', icon: CodeXml, x: 1225, y: 165, depth: 10, float: 9 },
]

/** Smooth curve through points (Catmull-Rom converted to cubic Beziers). */
function smoothPath(points: Array<[number, number]>) {
  let d = `M ${points[0][0]} ${points[0][1]}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`
  }
  return d
}

// Connector runs through every node in order, dipping below the trust line between AI and Data
const connector = smoothPath([
  ...nodes.slice(0, 3).map((n): [number, number] => [n.x, n.y]),
  [720, 712],
  ...nodes.slice(3).map((n): [number, number] => [n.x, n.y]),
])

const ellipse = (rx: number, ry: number) =>
  `M ${CX - rx} ${CY} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0`

const pointOn = (rx: number, ry: number, deg: number) => {
  const t = (deg * Math.PI) / 180
  return [CX + rx * Math.cos(t), CY + ry * Math.sin(t)] as const
}

type Orbit = {
  rx: number
  ry: number
  tilt: number
  opacity: number
  dash?: string
  sway: number
  swayDelay: number
  /** Particles: [loop seconds, start offset seconds, show on mobile] */
  particles: Array<[number, number, boolean]>
  /** Angles of the small static nodes resting on the orbit */
  dots: number[]
}

// Long, flat ellipses at slightly different tilts: reads as interlocking systems, not a spinner
const orbits: Orbit[] = [
  { rx: 660, ry: 250, tilt: -6, opacity: 0.32, sway: 52, swayDelay: 0, particles: [[46, 0, true], [46, -23, false]], dots: [200, 335] },
  { rx: 560, ry: 330, tilt: 9, opacity: 0.2, sway: 64, swayDelay: -20, particles: [[58, -14, false]], dots: [25, 150] },
  { rx: 740, ry: 185, tilt: 2, opacity: 0.3, dash: '2 8', sway: 44, swayDelay: -8, particles: [[64, -30, true]], dots: [160] },
]

/** A small glowing dot that travels a path and fades in and out along the way. */
function Particle({ path, dur, begin, className }: { path: string; dur: number; begin: number; className?: string }) {
  return (
    <g className={className} opacity="0">
      <circle r="6" className="fill-accent" opacity="0.18" />
      <circle r="2.2" className="fill-accent" />
      <animateMotion path={path} dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
      <animate
        attributeName="opacity"
        values="0;0.9;0.9;0"
        keyTimes="0;0.2;0.75;1"
        dur={`${dur / 3}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
      />
    </g>
  )
}

function Node({ node, index, px, py, reduce }: { node: EcoNode; index: number; px: MotionValue<number>; py: MotionValue<number>; reduce: boolean }) {
  const x = useTransform(px, (v) => v * node.depth)
  const y = useTransform(py, (v) => v * node.depth)
  const Icon = node.icon
  return (
    <motion.div
      className="absolute"
      style={{ left: node.x, top: node.y, x, y }}
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.7 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div className="animate-float" style={{ animationDuration: `${node.float}s`, animationDelay: `${-index * 1.3}s` }}>
          <div className="glass pointer-events-auto relative flex items-center gap-2.5 rounded-2xl border border-border/80 py-2 pr-3.5 pl-2 shadow-soft transition duration-500 ease-out-expo hover:scale-[1.06] hover:shadow-glow">
            {/* Soft glow that passes from node to node in flow order */}
            <span
              className="animate-eco-pulse pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-glow"
              style={{ animationDelay: `${index * 2}s` }}
            />
            <span className="bg-icon-gradient inline-flex h-8 w-8 items-center justify-center rounded-xl text-accent-strong">
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <span className="text-xs font-semibold whitespace-nowrap text-fg/80">{node.label}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Home hero backdrop: a quiet "software ecosystem" of tilted orbits, drifting particles and technology
 * nodes framing the centered hero text. Decorative only (aria-hidden). Nodes appear on xl screens;
 * smaller screens get faint orbits and a couple of particles. Pauses offscreen; static for reduced motion.
 */
export default function HeroEcosystem() {
  const reduce = useReducedMotion() ?? false
  const backRef = useRef<HTMLDivElement>(null)
  const frontRef = useRef<HTMLDivElement>(null)

  // Mouse position as -1..1 from the screen center, smoothed so the parallax glides
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 35, damping: 18 })
  const py = useSpring(my, { stiffness: 35, damping: 18 })
  const backX = useTransform(px, (v) => v * -6)
  const backY = useTransform(py, (v) => v * -6)

  useEffect(() => {
    const layers = [backRef.current, frontRef.current]
    let visible = true

    // Stop all motion while the hero is scrolled out of view
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      for (const layer of layers) {
        layer?.toggleAttribute('data-eco-paused', !visible)
        layer?.querySelectorAll('svg').forEach((svg) => (visible ? svg.unpauseAnimations() : svg.pauseAnimations()))
      }
    })
    if (backRef.current) io.observe(backRef.current)

    const desktop = window.matchMedia('(min-width: 80rem) and (pointer: fine)')
    const onMove = (e: PointerEvent) => {
      if (!visible || !desktop.matches) return
      mx.set((e.clientX / window.innerWidth - 0.5) * 2)
      my.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    if (!reduce) window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [reduce, mx, my])

  const stage = 'pointer-events-none absolute top-0 left-[calc(50%-720px)] h-[900px] w-[1440px]'

  return (
    <>
      {/* Back layer: orbits, connector and particles, behind the hero content */}
      <motion.div
        ref={backRef}
        className={`${stage} -z-10 origin-top mask-[linear-gradient(to_bottom,black_68%,transparent_88%)] max-md:scale-[0.6]`}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <motion.div className="absolute inset-0 max-md:opacity-60" style={{ x: backX, y: backY }}>
          {/* Fade the orbits out behind the headline so the text always reads cleanly */}
          <div className="absolute inset-0 md:mask-[radial-gradient(ellipse_500px_250px_at_720px_400px,rgb(0_0_0/0.12)_50%,black_100%)]">
            {orbits.map((o, i) => (
              <div
                key={i}
                className="animate-orbit-sway absolute inset-0 will-change-transform [transform-origin:720px_420px]"
                style={{ animationDuration: `${o.sway}s`, animationDelay: `${o.swayDelay}s` }}
              >
                <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="absolute inset-0 overflow-visible">
                  <g transform={`rotate(${o.tilt} ${CX} ${CY})`}>
                    {i === 0 && (
                      <path d={ellipse(o.rx, o.ry)} fill="none" strokeWidth="6" style={{ stroke: 'var(--accent)' }} opacity="0.05" />
                    )}
                    <path
                      d={ellipse(o.rx, o.ry)}
                      fill="none"
                      strokeWidth="1"
                      strokeDasharray={o.dash}
                      strokeLinecap="round"
                      style={{ stroke: 'var(--accent)' }}
                      opacity={o.opacity}
                    />
                    {o.dots.map((deg) => {
                      const [x, y] = pointOn(o.rx, o.ry, deg)
                      return (
                        <circle key={deg} cx={x} cy={y} r="3.5" strokeWidth="1.25" className="fill-surface stroke-accent" opacity="0.7" />
                      )
                    })}
                    {!reduce &&
                      o.particles.map(([dur, begin, mobile]) => (
                        <Particle key={begin} path={ellipse(o.rx, o.ry)} dur={dur} begin={begin} className={mobile ? undefined : 'max-md:hidden'} />
                      ))}
                  </g>
                </svg>
              </div>
            ))}
          </div>

          {/* The ecosystem connector linking the nodes (only shown alongside them) */}
          <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="absolute inset-0 hidden overflow-visible xl:block">
            <defs>
              <linearGradient id="eco-connector" gradientUnits="userSpaceOnUse" x1="0" y1="140" x2="0" y2="700">
                <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.12 }} />
                <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0.45 }} />
              </linearGradient>
            </defs>
            <path d={connector} fill="none" stroke="url(#eco-connector)" strokeWidth="1.25" strokeLinecap="round" />
            {!reduce && [0, -9, -18].map((begin) => <Particle key={begin} path={connector} dur={27} begin={begin} />)}
          </svg>
        </motion.div>
      </motion.div>

      {/* Front layer: technology nodes in the side gutters; only the cards take the pointer */}
      <div ref={frontRef} className={`${stage} z-10 hidden xl:block`} aria-hidden="true">
        {nodes.map((node, i) => (
          <Node key={node.label} node={node} index={i} px={px} py={py} reduce={reduce} />
        ))}
      </div>
    </>
  )
}
