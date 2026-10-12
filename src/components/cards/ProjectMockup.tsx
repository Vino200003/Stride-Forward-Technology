import {
  Activity,
  ChevronRight,
  Compass,
  Cpu,
  Database,
  Flame,
  Navigation,
  Package,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  Wifi,
  Zap,
} from 'lucide-react'

type ProjectMockupProps = {
  projectId: string
  compact?: boolean
  className?: string
}

export default function ProjectMockup({ projectId, className = '' }: ProjectMockupProps) {
  switch (projectId) {
    case 'restaurant-system':
      return <DineFlowMockup className={className} />
    case 'cartify':
      return <CartifyMockup className={className} />
    case 'inventory-management':
      return <StockMateMockup className={className} />
    case 'vehicle-tracker':
      return <FleetTrackMockup className={className} />
    default:
      return <DineFlowMockup className={className} />
  }
}

/* -------------------------------------------------------------------------
 * 1. DineFlow: Restaurant Food Delivery & Kitchen OS
 * ----------------------------------------------------------------------- */
function DineFlowMockup({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-lift select-none ${className}`}>
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface-muted/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-fg/80">dineflow-pos.sft.live</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            LIVE DISPATCH
          </span>
          <span className="text-[10px] text-muted">WebSockets: 14ms</span>
        </div>
      </div>

      {/* Main Console Content */}
      <div className="p-3.5 sm:p-5">
        {/* KPI Row */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[10px] sm:text-xs font-medium">Active Orders</span>
              <Activity className="h-3.5 w-3.5 text-accent" />
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-lg sm:text-xl font-bold text-fg">28</span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">+12%</span>
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[10px] sm:text-xs font-medium">Kitchen Queue</span>
              <Flame className="h-3.5 w-3.5 text-amber-500" />
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-lg sm:text-xl font-bold text-fg">6 Prep</span>
              <span className="text-[10px] text-muted">Avg 9m</span>
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[10px] sm:text-xs font-medium">Today's Sales</span>
              <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-lg sm:text-xl font-bold text-fg">$3,840</span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">+22%</span>
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[10px] sm:text-xs font-medium">Couriers Active</span>
              <Truck className="h-3.5 w-3.5 text-sky-500" />
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-lg sm:text-xl font-bold text-fg">8 On Road</span>
              <span className="text-[10px] text-muted">100% On-time</span>
            </div>
          </div>
        </div>

        {/* Live Order Stream & Courier Route */}
        <div className="mt-3.5 grid gap-3 sm:grid-cols-5">
          {/* Orders Column */}
          <div className="space-y-2 sm:col-span-3">
            <div className="flex items-center justify-between text-xs font-semibold text-fg">
              <span>Live Order Stream</span>
              <span className="text-[10px] font-normal text-muted">Auto-refreshing</span>
            </div>

            <div className="space-y-2">
              <div className="group flex items-center justify-between rounded-xl border border-accent/30 bg-accent/5 p-2.5 sm:p-3 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-mono text-xs font-bold">
                    #48
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-fg">Table 06 · Dine-In</span>
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Cooking
                      </span>
                    </div>
                    <p className="text-[11px] text-muted">2x Grilled Salmon, 1x Truffle Pasta</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-fg">$64.50</span>
                  <p className="text-[10px] text-muted">4 min ago</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border/80 bg-surface p-2.5 sm:p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-muted text-muted font-mono text-xs font-bold">
                    #47
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-fg">Express Delivery · #D-102</span>
                      <span className="rounded bg-sky-500/10 px-1.5 py-0.2 text-[9px] font-semibold text-sky-600 dark:text-sky-400">
                        In Transit
                      </span>
                    </div>
                    <p className="text-[11px] text-muted">Woodfire Pizza Feast, 2x Gelato</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-fg">$42.00</span>
                  <p className="text-[10px] text-muted">Driver #3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Courier Map Radar */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-navy-900/90 p-3 sm:col-span-2 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-sky-300">Live Courier Dispatch</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Simulated Route Visualization */}
            <div className="my-2 relative h-16 w-full rounded-lg bg-navy-950/70 p-2 flex items-center justify-between overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdff_1px,transparent_1px)] [background-size:10px_10px]" />
              <div className="relative flex items-center gap-2 z-10">
                <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white">
                  <Navigation className="h-3 w-3 -rotate-45" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white">Driver Alex K.</p>
                  <p className="text-[9px] text-sky-200">En Route · 1.4 km left</p>
                </div>
              </div>
              <div className="z-10 rounded-md bg-white/10 px-2 py-1 text-right">
                <span className="block font-mono text-[10px] font-bold text-amber-300">ETA 7m</span>
                <span className="text-[8px] text-sky-100">Speed: 38 km/h</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-sky-200/80 pt-1 border-t border-white/10">
              <span>Kitchen API: 200 OK</span>
              <span className="text-emerald-300">99.98% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------
 * 2. Cartify: Modern E-Commerce Platform
 * ----------------------------------------------------------------------- */
function CartifyMockup({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-lift select-none ${className}`}>
      {/* Window Header */}
      <div className="flex items-center justify-between border-b border-border bg-surface-muted/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-fg/80">cartify-storefront.io</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold text-sky-600 dark:text-sky-400">
            <ShieldCheck className="h-3 w-3" /> Stripe 3DS Verified
          </span>
        </div>
      </div>

      <div className="p-3.5 sm:p-5">
        {/* Top metrics bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs font-medium text-muted">Revenue Run-rate</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-base sm:text-xl font-bold text-fg">$128,450</span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">↑ 38%</span>
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs font-medium text-muted">Checkout Speed</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-base sm:text-xl font-bold text-fg">1.18s</span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Optimal</span>
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs font-medium text-muted">Conversion Rate</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-base sm:text-xl font-bold text-fg">4.82%</span>
              <span className="text-[10px] font-bold text-accent-strong">+1.4%</span>
            </div>
          </div>
        </div>

        {/* Live Product catalog item & Checkout preview */}
        <div className="mt-3.5 grid gap-3 sm:grid-cols-12">
          {/* Product Cards */}
          <div className="space-y-2 sm:col-span-7">
            <div className="flex items-center justify-between text-xs font-semibold text-fg">
              <span>Featured Store Catalog</span>
              <span className="text-[10px] text-muted">Instant Cart Sync</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-border bg-surface-muted/30 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-accent-soft px-1.5 py-0.5 text-[9px] font-bold text-accent-strong">BESTSELLER</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">In Stock</span>
                </div>
                <div className="my-2 h-12 rounded-lg bg-linear-to-br from-sky/20 to-navy/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-accent" />
                </div>
                <p className="text-xs font-bold text-fg truncate">AeroSound ANC Headphones</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-fg">$189.00</span>
                  <span className="text-[10px] text-muted">142 sold</span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted/30 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-purple-500/10 px-1.5 py-0.5 text-[9px] font-bold text-purple-600 dark:text-purple-400">NEW</span>
                  <span className="text-[10px] text-amber-500 font-semibold">Low Stock</span>
                </div>
                <div className="my-2 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-sky/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <p className="text-xs font-bold text-fg truncate">MagCharge Wireless Hub</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-fg">$69.00</span>
                  <span className="text-[10px] text-muted">8 left</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout drawer mini */}
          <div className="rounded-xl border border-border bg-surface-muted/60 p-3 sm:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <span className="text-xs font-bold text-fg flex items-center gap-1.5">
                  <ShoppingCart className="h-3.5 w-3.5 text-accent" /> Express Checkout
                </span>
                <span className="text-[10px] font-mono text-muted">2 items</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span className="text-fg font-medium">$258.00</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Shipping (Express)</span>
                  <span className="text-emerald-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between border-t border-border pt-1 font-bold text-fg">
                  <span>Total</span>
                  <span className="text-accent-strong">$258.00</span>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-xs font-semibold text-primary-fg shadow-soft">
                <span>1-Click Apple Pay / Card</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
              <p className="mt-1 text-center text-[9px] text-muted">Zero Transaction Fees · Direct Payout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------
 * 3. StockMate: Real-Time Warehouse & Inventory Intelligence
 * ----------------------------------------------------------------------- */
function StockMateMockup({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-lift select-none ${className}`}>
      {/* Window Header */}
      <div className="flex items-center justify-between border-b border-border bg-surface-muted/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-fg/80">stockmate.warehouse.corp</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            <Database className="h-3 w-3" /> PostgreSQL Sync: 99.9%
          </span>
        </div>
      </div>

      <div className="p-3.5 sm:p-5">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs font-medium text-muted">Total Stock Value</span>
            <div className="mt-1">
              <span className="font-display text-base sm:text-xl font-bold text-fg">$482,900</span>
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs font-medium text-muted">Active SKUs</span>
            <div className="mt-1">
              <span className="font-display text-base sm:text-xl font-bold text-fg">14,820</span>
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs font-medium text-muted">Audit Accuracy</span>
            <div className="mt-1">
              <span className="font-display text-base sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">99.94%</span>
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs font-medium text-muted">Auto-Reorders</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-base sm:text-xl font-bold text-amber-500">3 Pending</span>
            </div>
          </div>
        </div>

        {/* Inventory Data Table */}
        <div className="mt-3.5 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border bg-surface-muted/50 px-3 py-2 text-[11px] font-semibold text-muted flex items-center justify-between">
            <div className="flex gap-4">
              <span className="w-16">SKU ID</span>
              <span className="w-36">Item Name</span>
              <span className="hidden sm:inline w-24">Category</span>
              <span className="w-20">Stock Level</span>
            </div>
            <span>Status</span>
          </div>

          <div className="divide-y divide-border/60 text-xs">
            <div className="flex items-center justify-between px-3 py-2.5 hover:bg-surface-muted/30">
              <div className="flex items-center gap-4">
                <span className="w-16 font-mono text-[11px] font-bold text-fg">#SKU-9021</span>
                <span className="w-36 font-medium text-fg truncate">Microchip Cortex-M4</span>
                <span className="hidden sm:inline w-24 text-[11px] text-muted">Semiconductors</span>
                <div className="w-20">
                  <div className="h-1.5 w-16 rounded-full bg-border overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                  </div>
                  <span className="text-[10px] text-muted">4,250 units</span>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                Optimal
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-2.5 hover:bg-surface-muted/30">
              <div className="flex items-center gap-4">
                <span className="w-16 font-mono text-[11px] font-bold text-fg">#SKU-7734</span>
                <span className="w-36 font-medium text-fg truncate">Lithium Cell 3400mAh</span>
                <span className="hidden sm:inline w-24 text-[11px] text-muted">Energy Storage</span>
                <div className="w-20">
                  <div className="h-1.5 w-16 rounded-full bg-border overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[24%]" />
                  </div>
                  <span className="text-[10px] text-muted">180 units</span>
                </div>
              </div>
              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                Auto-PO Sent
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-2.5 hover:bg-surface-muted/30">
              <div className="flex items-center gap-4">
                <span className="w-16 font-mono text-[11px] font-bold text-fg">#SKU-3108</span>
                <span className="w-36 font-medium text-fg truncate">Optical Sensor Module</span>
                <span className="hidden sm:inline w-24 text-[11px] text-muted">Components</span>
                <div className="w-20">
                  <div className="h-1.5 w-16 rounded-full bg-border overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[92%]" />
                  </div>
                  <span className="text-[10px] text-muted">1,900 units</span>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                In Transit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------
 * 4. FleetTrack: Vehicle Telemetry & IoT Logistics Engine
 * ----------------------------------------------------------------------- */
function FleetTrackMockup({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-navy-950 text-white shadow-lift select-none ${className}`}>
      {/* Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-navy-900/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-sky-200">fleettrack.telemetry.io</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-sky-300">
            <Wifi className="h-3 w-3" /> MQTT: 250ms Ping
          </span>
        </div>
      </div>

      <div className="p-3.5 sm:p-5">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs text-sky-300 font-medium">Vehicles Online</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-base sm:text-xl font-bold text-white">512</span>
              <span className="text-[10px] text-emerald-400 font-semibold">100% Signal</span>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs text-sky-300 font-medium">Fuel Saved</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-base sm:text-xl font-bold text-emerald-400">+18.2%</span>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs text-sky-300 font-medium">On-Time Route Rate</span>
            <div className="mt-1">
              <span className="font-display text-base sm:text-xl font-bold text-white">99.2%</span>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3">
            <span className="text-[10px] sm:text-xs text-sky-300 font-medium">Geofence Alerts</span>
            <div className="mt-1">
              <span className="font-display text-base sm:text-xl font-bold text-sky-200">0 Breaches</span>
            </div>
          </div>
        </div>

        {/* Telemetry Radar Map & Vehicle Cards */}
        <div className="mt-3.5 grid gap-3 sm:grid-cols-12">
          {/* Simulated GPS Radar Map */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-navy-900/90 p-3 sm:col-span-7 h-44 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdff_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="relative z-10 flex items-center justify-between text-xs font-semibold text-sky-300">
              <span className="flex items-center gap-1.5">
                <Compass className="h-3.5 w-3.5 text-accent" /> Highway Telemetry Grid
              </span>
              <span className="text-[10px] text-white/60">GPS Fix: 3D RTK High-Precision</span>
            </div>

            {/* Simulated Live Route Path */}
            <div className="relative z-10 my-auto py-2">
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                  <span className="text-[11px] font-mono font-bold text-white">HUB-01 (Colombo)</span>
                </div>
                <div className="flex-1 mx-3 border-t-2 border-dashed border-sky-400/50 relative">
                  <div className="absolute top-1/2 left-3/5 -translate-y-1/2 -translate-x-1/2 flex items-center gap-1 rounded bg-accent px-1.5 py-0.5 text-[9px] font-mono font-bold text-white shadow-glow">
                    <Truck className="h-2.5 w-2.5" /> TX-802 · 68 km/h
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-sky-400 ring-4 ring-sky-400/20" />
                  <span className="text-[11px] font-mono font-bold text-white">TERMINAL (Jaffna)</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[10px] text-sky-300/80 pt-1 border-t border-white/10">
              <span>Next Checkpoint: Vavuniya Depot (24m)</span>
              <span className="text-emerald-400">Route Efficiency: 96%</span>
            </div>
          </div>

          {/* Active Unit Telemetry Card */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-accent" /> Unit Telemetry #TX-802
                </span>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-mono font-bold text-emerald-300">NORMAL</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-white/70">
                  <span>Engine RPM</span>
                  <span className="font-mono text-white font-medium">1,840 RPM</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Cargo Temp</span>
                  <span className="font-mono text-white font-medium">+4.2°C (Refrigerated)</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Fuel Level</span>
                  <span className="font-mono text-emerald-400 font-medium">84% · Range 640 km</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Driver Duty</span>
                  <span className="font-mono text-white font-medium">2.4h / 8.0h Max</span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-white/60">
              <span>IoT Protocol: MQTT / TLS 1.3</span>
              <span className="text-sky-300">Live Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
