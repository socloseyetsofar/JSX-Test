import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Rocket,
  Sparkles,
  Shield,
  Zap,
  Github,
  Server,
  Globe,
  Cpu,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Small utility components
const Glow = ({ className = "" }) => (
  <div
    className={`pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] ${className}`}
  >
    <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-sky-500/20 blur-3xl" />
    <div className="absolute -bottom-24 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-sky-500/20 via-emerald-500/20 to-indigo-500/20 blur-3xl" />
  </div>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Logo = () => (
  <div className="flex items-center gap-2 text-white">
    <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-slate-200 to-white">
      <div className="h-4 w-4 rotate-45 rounded-[4px] bg-gradient-to-br from-indigo-600 to-sky-500 shadow-sm" />
    </div>
    <span className="font-semibold tracking-tight">Aether</span>
  </div>
);

const Marquee = () => (
  <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
    <div className="animate-[scroll_30s_linear_infinite] flex items-center gap-12 opacity-70">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
          <div className="h-2 w-2 rounded-full bg-slate-500/60" />
          <span className="tracking-wide">Partner #{i + 1}</span>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    `}</style>
  </div>
);

const CodeBlock = () => (
  <Card className="border-slate-800/60 bg-gradient-to-b from-slate-900/60 to-slate-950/80 backdrop-blur-xl">
    <CardHeader className="border-b border-slate-800/60">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <Badge variant="secondary" className="bg-slate-800 text-slate-200">aether.app</Badge>
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <Tabs defaultValue="react">
        <TabsList className="mx-4 mt-4 bg-slate-800/60">
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsTrigger value="next">Next.js</TabsTrigger>
          <TabsTrigger value="cli">CLI</TabsTrigger>
        </TabsList>
        <TabsContent value="react" className="p-4">
{`bash
npm i aether
# app.jsx
import { deploy } from 'aether';

export default function App(){
  return <button onClick={()=>deploy('my-app')}>Deploy</button>
}
`}
        </TabsContent>
        <TabsContent value="next" className="p-4">
{`tsx
// app/page.tsx
import { Button } from '@/components/ui/button';
import { deploy } from 'aether';

export default function Page(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Hello Aether</h1>
      <Button onClick={()=>deploy('next-app')}>Ship it</Button>
    </div>
  )
}
`}
        </TabsContent>
        <TabsContent value="cli" className="p-4">
{`bash
npx aether@latest init my-app
cd my-app && aether dev
# When you're ready
aether deploy
`}
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <Card className="border-slate-800/60 bg-slate-900/50 backdrop-blur">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <CardTitle className="text-slate-100">{title}</CardTitle>
          <CardDescription className="text-slate-400">{desc}</CardDescription>
        </div>
      </div>
    </CardHeader>
  </Card>
);

const Stat = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 text-center">
    <div className="text-4xl font-bold tracking-tight text-white">{value}</div>
    <div className="mt-1 text-sm text-slate-400">{label}</div>
  </div>
);

const PricingCard = ({ title, price, tagline, features, cta, highlight = false }) => (
  <Card className={`flex flex-col border-slate-800/60 ${highlight ? "bg-gradient-to-b from-slate-900 to-slate-950" : "bg-slate-900/40"}`}>
    <CardHeader>
      <Badge className="w-fit bg-slate-800/80 text-slate-200">{title}</Badge>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-slate-400">/mo</span>
      </div>
      <CardDescription className="text-slate-400">{tagline}</CardDescription>
    </CardHeader>
    <CardContent className="flex-1">
      <ul className="space-y-3 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300">
            <Check className="mt-0.5 h-4 w-4 flex-none" /> {f}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full" variant={highlight ? "default" : "secondary"}>{cta}</Button>
    </CardFooter>
  </Card>
);

export default function AetherLanding() {
  return (
    <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-900/60 bg-slate-950/70 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-slate-300 hover:text-white" href="#features">Features</a>
            <a className="text-sm text-slate-300 hover:text-white" href="#pricing">Pricing</a>
            <a className="text-sm text-slate-300 hover:text-white" href="#docs">Docs</a>
            <a className="text-sm text-slate-300 hover:text-white" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="hidden md:inline-flex">Sign in</Button>
            <Button className="gap-2"><Rocket className="h-4 w-4" /> Start free</Button>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Glow />
        <Container className="relative grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-800/60 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
            >
              <Sparkles className="h-4 w-4" /> Introducing Aether Edge
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl"
            >
              Ship ideas at the speed of thought.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl text-lg leading-relaxed text-slate-300"
            >
              Instant deploys, global edge, and delightful DX. Build, preview, and scale
              your web apps without leaving your flow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col items-start gap-3 sm:flex-row"
            >
              <Button className="group gap-2">
                Get started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button variant="secondary" className="gap-2">
                <Github className="h-4 w-4" /> Star on GitHub
              </Button>
            </motion.div>

            <div className="grid max-w-xl grid-cols-3 gap-3 pt-6">
              <Stat label="Avg deploy" value="2.4s" />
              <Stat label="Global regions" value="38" />
              <Stat label="Uptime" value=">99.99%" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-600/10 via-fuchsia-500/10 to-sky-500/10 blur-2xl" />
            <CodeBlock />
          </motion.div>
        </Container>

        <Container>
          <Marquee />
        </Container>
      </section>

      {/* Feature grid */}
      <section id="features" className="relative border-t border-slate-900/60 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Everything you need to go from idea → URL</h2>
            <p className="mt-3 text-slate-400">Zero-config deploys, observability, and a fast edge network—built for modern frameworks.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Feature icon={Zap} title="Blazing deploys" desc="Push to main and watch your preview go live in seconds." />
            <Feature icon={Server} title="Edge runtime" desc="Compute at the edge for low latency and scale on demand." />
            <Feature icon={Terminal} title="DX you’ll love" desc="CLI and UI that stay out of your way and help you flow." />
            <Feature icon={Shield} title="Security by default" desc="Automatic HTTPS, isolation, and smart rate limiting." />
            <Feature icon={Globe} title="Global caching" desc="Smart CDN with cache invalidation that just works." />
            <Feature icon={Cpu} title="Analytics & logs" desc="Real‑time insights, traces, and structured logs." />
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <section id="docs" className="relative border-t border-slate-900/60 py-20 md:py-28">
        <Container className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">A workflow that feels like magic</h3>
            <ol className="space-y-4">
              {[
                {
                  icon: Github,
                  title: "Connect your repo",
                  desc: "We auto-detect your framework and set sensible defaults.",
                },
                {
                  icon: Terminal,
                  title: "Preview every PR",
                  desc: "Shareable URLs with isolated databases and environment secrets.",
                },
                {
                  icon: Rocket,
                  title: "Promote to prod",
                  desc: "One click to ship globally with instant rollbacks.",
                },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{i + 1}. {step.title}</div>
                    <div className="text-sm text-slate-400">{step.desc}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-4">
              <div className="text-xs text-slate-400">Quickstart</div>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm leading-relaxed text-slate-200">{`curl -fsSL https://get.aether.sh | sh\naether deploy`}</pre>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
            <h4 className="text-lg font-medium text-white">Subscribe for updates</h4>
            <p className="mt-1 text-sm text-slate-400">No spam. Just product drops and tips.</p>
            <div className="mt-4 flex gap-2">
              <Input placeholder="you@company.com" className="bg-slate-950/60" />
              <Button>Notify me</Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800/60 p-4 text-center">
                <div className="text-2xl font-semibold text-white">400ms</div>
                <div className="text-xs text-slate-400">P95 response</div>
              </div>
              <div className="rounded-xl border border-slate-800/60 p-4 text-center">
                <div className="text-2xl font-semibold text-white">3TB</div>
                <div className="text-xs text-slate-400">Static bandwidth</div>
              </div>
              <div className="rounded-xl border border-slate-800/60 p-4 text-center">
                <div className="text-2xl font-semibold text-white">∞</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative border-t border-slate-900/60 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold text-white md:text-4xl">Simple, scalable pricing</h3>
            <p className="mt-2 text-slate-400">Start free. Scale when you do. Cancel anytime.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PricingCard
              title="Hobby"
              price="$0"
              tagline="For personal projects and experiments"
              features={[
                "Unlimited static sites",
                "1 concurrent build",
                "Community support",
              ]}
              cta="Start building"
            />
            <PricingCard
              highlight
              title="Pro"
              price="$20"
              tagline="For startups and growing teams"
              features={[
                "Edge functions & KV",
                "Team previews",
                "Email support",
              ]}
              cta="Upgrade to Pro"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              tagline="For orgs with advanced needs"
              features={[
                "SAML SSO & audit logs",
                "24/7 support & SLAs",
                "VPC peering",
              ]}
              cta="Talk to sales"
            />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-slate-900/60 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold text-white md:text-4xl">Frequently asked questions</h3>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How fast are deploys?</AccordionTrigger>
                <AccordionContent>
                  Most apps deploy in seconds thanks to our distributed build cache and smart dependency graph.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Which frameworks are supported?</AccordionTrigger>
                <AccordionContent>
                  We auto-detect popular frameworks like Next.js, SvelteKit, Astro, Remix, and more. Custom adapters are supported via config.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I bring my own domain?</AccordionTrigger>
                <AccordionContent>
                  Yep—connect any domain in minutes with automatic SSL certificates and DNS management.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900/60 py-10">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-sm text-slate-400">© {new Date().getFullYear()} Aether Labs</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#">Docs</a>
            <a href="#">Status</a>
            <a href="#">GitHub</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
