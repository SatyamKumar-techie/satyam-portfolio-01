import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud, Container, GitBranch, Server, Workflow, Terminal,
  Mail, Linkedin, Github, Twitter, MapPin, ArrowUpRight,
  Activity, BarChart3, Code2, Rocket, ChevronRight,
} from "lucide-react";
import avatar from "@/assets/satyam-avatar.png";

const SOCIAL = {
  github: "https://github.com/SatyamKumar-techie",
  linkedin: "https://www.linkedin.com/in/satyam-kumar-techie",
  twitter: "https://x.com/SatyamKr001",
  email: "mailto:satyamdark123@gmail.com",
};

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Satyam Kumar — DevOps Engineer | Cloud, Kubernetes, CI/CD" },
      {
        name: "description",
        content:
          "DevOps Enthusiast building reliable, scalable, automated systems with AWS, Kubernetes, Terraform, and CI/CD pipelines.",
      },
      { property: "og:title", content: "Satyam Kumar — DevOps Engineer" },
      {
        property: "og:description",
        content: "Design. Deploy. Scale. Portfolio of Satyam Kumar.",
      },
    ],
  }),
});

const skills = {
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "GitLab", "ArgoCD", "Ansible"],
  "Monitoring & Observability": ["Prometheus", "Grafana"],
  "Programming": ["C", "C++", "DSA", "Problem Solving"],
  "Environment & Tools": ["Linux", "Ubuntu", "Git", "GitHub"],
};

const focusAreas = [
  { icon: Container, title: "Kubernetes & Container Orchestration", desc: "Designing resilient cluster workloads with Helm, ArgoCD and rolling deployments." },
  { icon: Cloud, title: "Cloud Infrastructure (AWS)", desc: "EC2, VPC, S3, IAM and cost-aware architectures for production workloads." },
  { icon: Workflow, title: "CI/CD Pipeline Engineering", desc: "End-to-end automation with Jenkins & GitLab CI — build, test, scan, deploy." },
  { icon: Server, title: "Infrastructure as Code", desc: "Reproducible environments with Terraform modules and Ansible playbooks." },
  { icon: BarChart3, title: "Monitoring & Observability", desc: "Prometheus metrics, Grafana dashboards and actionable alerting." },
  { icon: Code2, title: "System Design & Fundamentals", desc: "Strong foundations in DSA, problem solving and scalable architecture." },
];

const projects = [
  {
    name: "easyshop-production-k8s",
    desc: "Production-grade e-commerce deployment on Kubernetes with full CI/CD, monitoring and IaC.",
    stack: ["Kubernetes", "Helm", "ArgoCD", "AWS"],
    href: "https://github.com/SatyamKumar-techie",
  },
  {
    name: "Containerized Application Deployment",
    desc: "Dockerized multi-service apps deployed on Kubernetes with health checks, rolling updates and resource limits.",
    stack: ["Docker", "Kubernetes", "Helm"],
    href: "https://github.com/SatyamKumar-techie",
  },
  {
    name: "CI/CD Automation",
    desc: "Automated build, test and deploy pipelines using Jenkins and GitLab CI with image scanning and approvals.",
    stack: ["Jenkins", "GitLab CI", "Docker"],
    href: "https://github.com/SatyamKumar-techie",
  },
  {
    name: "AWS Infrastructure Setup",
    desc: "Provisioning VPC, EC2, IAM and S3 with Terraform — reproducible, cost-aware cloud foundations.",
    stack: ["AWS", "Terraform", "IAM"],
    href: "https://github.com/SatyamKumar-techie",
  },
  {
    name: "Kubernetes Cluster Configuration",
    desc: "Bootstrapping production-ready clusters with networking, RBAC, ingress and observability stack.",
    stack: ["Kubernetes", "Prometheus", "Grafana"],
    href: "https://github.com/SatyamKumar-techie",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm flex items-center gap-2">
            <span className="text-primary">$</span>
            <span className="font-semibold">satyam</span>
            <span className="text-muted-foreground">~/portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#focus" className="hover:text-foreground transition">Focus</a>
            <a href="#stack" className="hover:text-foreground transition">Stack</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="mailto:satyamdark123@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]"
          >
            Hire me <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-80"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for DevOps / Cloud / SRE internships
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Satyam Kumar
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-mono text-primary">
              Design. Deploy. Scale.
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              DevOps enthusiast focused on building reliable, scalable, and automated
              systems. I work with cloud platforms, containerized environments and
              CI/CD pipelines to ship ideas into production-ready deployments.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]"
              >
                <Rocket className="h-4 w-4" /> View Projects
              </a>
              <a href={SOCIAL.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-2.5 text-sm font-medium hover:bg-card transition">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-2.5 text-sm font-medium hover:bg-card transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={SOCIAL.twitter} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-2.5 text-sm font-medium hover:bg-card transition">
                <Twitter className="h-4 w-4" /> Twitter
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /><span>India · UTC +05:30</span></span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /><span>satyamdark123@gmail.com</span></span>
              <a href={SOCIAL.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition"><Twitter className="h-4 w-4" /><span>@SatyamKr001</span></a>
            </div>
          </div>

          <div className="relative mx-auto md:mx-0 order-first md:order-none">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" aria-hidden />
            <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary shadow-[var(--shadow-glow)]">
              <img
                src={avatar}
                alt="Portrait of Satyam Kumar"
                className="h-full w-full rounded-full object-cover bg-card"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Marquee */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm">
          {[
            { k: "Focus", v: "DevOps / SRE" },
            { k: "Cloud", v: "AWS" },
            { k: "Orchestration", v: "Kubernetes" },
            { k: "Mindset", v: "Automate everything" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
              <div className="mt-1 text-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Focus areas */}
      <section id="focus" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="01 — Focus Areas" title="What I work on" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {focusAreas.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition shadow-[var(--shadow-card)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="mx-auto max-w-6xl px-6 py-24 border-t border-border/60">
        <SectionHeader eyebrow="02 — Arsenal" title="Tools & technologies" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <Terminal className="h-4 w-4 text-primary" /> {group}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span
                    key={i}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-mono"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 border-t border-border/60">
        <SectionHeader eyebrow="03 — Projects" title="Selected work" />
        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition"
            >
              <div className="flex items-center gap-2 font-mono text-sm">
                <GitBranch className="h-4 w-4 text-primary" />
                <span className="font-semibold">{p.name}</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] font-mono text-muted-foreground border border-border rounded px-2 py-0.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-border/60">
        <SectionHeader eyebrow="04 — Roadmap" title="Scaling my expertise" />
        <ul className="mt-10 grid md:grid-cols-2 gap-3">
          {[
            "Master Kubernetes in production environments",
            "Build end-to-end CI/CD pipelines",
            "Automate infrastructure using Terraform",
            "Strengthen system design & problem solving",
          ].map((g) => (
            <li key={g} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 border-t border-border/60">
        <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "var(--gradient-hero)" }} />
          <Activity className="h-8 w-8 text-primary mx-auto" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Let's build something reliable.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Open to DevOps, Cloud and SRE internship opportunities. Let's talk
            pipelines, clusters and clean infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:satyamdark123@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
              <Mail className="h-4 w-4" /> satyamdark123@gmail.com
            </a>
            <a href="https://linkedin.com/in/satyam-kumar-techie" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-2.5 text-sm font-medium hover:bg-background transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://github.com/SatyamKumar-techie" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-2.5 text-sm font-medium hover:bg-background transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <span>⚙ Automate Everything · Scale Fearlessly · Build Relentlessly ⚙</span>
          <span>© {new Date().getFullYear()} Satyam Kumar</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
