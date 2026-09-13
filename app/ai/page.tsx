"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CAPABILITIES = [
  {
    title: "API-koppelingen",
    body: "Tools met elkaar laten praten, zodat gegevens automatisch doorstromen in plaats van dat iemand ze overtypt.",
    tag: "Koppelen",
  },
  {
    title: "Lokale agents",
    body: "AI die op je eigen machine draait en taken zelfstandig uitvoert, zonder dat gevoelige data het pand uit gaat.",
    tag: "Automatiseren",
  },
  {
    title: "Dashboards",
    body: "Een overzicht waar alles samenkomt, zodat je in een oogopslag ziet hoe het ervoor staat in plaats van vijf tabbladen open te hebben.",
    tag: "Inzicht",
  },
  {
    title: "Integraties",
    body: "De tools die een team al gebruikt slimmer laten samenwerken, zodat het werk scheelt in plaats van dat er weer iets bovenop komt.",
    tag: "Verbinden",
  },
];

const AMBITIONS = [
  "Van losse automatiseringen naar oplossingen die een heel proces schelen",
  "Dieper in agents die context begrijpen in plaats van losse opdrachten uitvoeren",
  "Blijven bouwen en bijleren met Claude als vaste sparringpartner",
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AiPage() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-white mb-4">/ AI &amp; Automatisering</p>
          <h1 className="font-black tracking-[-0.04em] leading-[1.05] text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            AI die iets{" "}
            <span className="text-accent">doet</span>.
          </h1>
          <p className="text-lg text-white leading-relaxed max-w-2xl">
            De meeste mensen gebruiken AI om sneller tekst te maken. Mij interesseert de stap daarna:
            systemen aan elkaar knopen zodat het werk zichzelf doet, en alles zichtbaar maken op een plek.
          </p>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-white mb-3">Waar ik mee werk</p>
            <h2 className="text-3xl font-black tracking-tight text-white mb-10">Koppelen, automatiseren, zichtbaar maken.</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={0.08 * i}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: "rgba(9, 20, 45, 0.72)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span
                    className="inline-block text-[10px] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full mb-4"
                    style={{ background: "rgba(124,58,237,0.14)", border: "1px solid rgba(124,58,237,0.28)", color: "#c4b5fd" }}
                  >
                    {c.tag}
                  </span>
                  <h3 className="text-xl font-black tracking-tight text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-white leading-relaxed opacity-90">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-white mb-3">Van dichtbij gezien</p>
            <h2 className="text-3xl font-black tracking-tight text-white mb-10">Een werkplek waar alles samenkomt.</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: "rgba(9, 20, 45, 0.72)",
                border: "1px solid rgba(125,211,252,0.22)",
                boxShadow: "0 8px 48px rgba(56,189,248,0.08)",
              }}
            >
              <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
                <div className="space-y-5 text-base text-white leading-[1.9]">
                  <p>
                    Via Ruben heb ik de <span className="text-accent font-semibold">Business Cockpit</span> van A Mi Manera
                    van dichtbij kunnen volgen: een werkplek waarin strategie, marketing, KPI-dashboards, workflows en
                    AI-agents niet in losse documenten leven maar in een systeem samenkomen.
                  </p>
                  <p>
                    Wat mij daaraan pakt is het probleem dat het oplost. Bij de meeste organisaties zit de strategie in het
                    ene document, staan de cijfers in het andere en zit de rest in iemands hoofd. Hoe groter het bedrijf
                    wordt, hoe meer overzicht er verdwijnt. Een plek waar alles zichtbaar is, verandert hoe een team werkt.
                  </p>
                  <p>
                    Ik heb er niet aan meegebouwd. Ik heb het van dichtbij gezien, vragen gesteld over hoe het in elkaar
                    zit, en er veel van opgestoken over hoe je zoiets opbouwt. Zelf maak ik dashboards op kleinere schaal:
                    hetzelfde idee, ander formaat. Zorgen dat je in een scherm ziet wat er speelt.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {["Strategie", "KPI-dashboards", "Workflow-automatisering", "Context-aware agents", "Kennisbank"].map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#38bdf8" }} />
                      <span className="text-sm text-white">{m}</span>
                    </div>
                  ))}
                  <a
                    href="https://www.amimanera.io/cockpit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase tracking-wide mt-2 text-accent"
                  >
                    Bekijk de Cockpit
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-white mb-3">Waar ik heen wil</p>
            <h2 className="text-3xl font-black tracking-tight text-white mb-6">Hier zie ik mijn toekomst.</h2>
            <p className="text-base text-white leading-relaxed max-w-2xl mb-10 opacity-90">
              Ik ben hier niet uitgeleerd, en dat is precies het punt. Marketing en communicatie verandert snel, en wie
              begrijpt hoe je systemen koppelt bouwt wat anderen alleen bespreken. Daar wil ik in doorgroeien.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {AMBITIONS.map((a, i) => (
              <Reveal key={a} delay={0.08 * i}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span className="text-2xl font-black text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-white leading-relaxed mt-3">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div
            className="rounded-2xl p-8 lg:p-10 mt-24 text-center"
            style={{ background: "rgba(9, 20, 45, 0.72)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <h2 className="text-2xl font-black tracking-tight text-white mb-3">
              Benieuwd wat dit voor jouw organisatie kan betekenen?
            </h2>
            <p className="text-base text-white opacity-90 mb-7 max-w-xl mx-auto">
              Ik denk graag mee over waar het werk vastloopt en wat je daar slim aan kunt koppelen.
            </p>
            <Link
              href="/contact"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ background: "#7c3aed", color: "#ffffff" }}
            >
              Neem contact op
            </Link>
          </div>
        </Reveal>

      </div>
    </main>
  );
}
