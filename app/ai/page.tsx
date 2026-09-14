"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CAPABILITIES = [
  {
    title: "API-koppelingen",
    body: "Tools met elkaar laten praten, zodat gegevens automatisch doorstromen in plaats van dat ik ze zelf zit over te typen.",
    tag: "Koppelen",
  },
  {
    title: "Lokale agents",
    body: "AI die lokaal op mijn eigen machine draait en zelf taken oppakt. Uitproberen hoever je daarmee komt.",
    tag: "Automatiseren",
  },
  {
    title: "Dashboards",
    body: "Een overzicht waar alles samenkomt, zodat ik in een oogopslag zie hoe het ervoor staat in plaats van vijf tabbladen open te hebben.",
    tag: "Inzicht",
  },
  {
    title: "Eigen integraties",
    body: "Kleine koppelingen die mijn eigen werk schelen. Klein beginnen, kijken wat er stukgaat, en het daarna beter maken.",
    tag: "Bouwen",
  },
];

const AMBITIONS = [
  "Van losse experimenten naar koppelingen die echt iets schelen",
  "Dieper in agents die context begrijpen in plaats van losse opdrachten uitvoeren",
  "Blijven bouwen en bijleren, met Claude erbij als ik vastloop",
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
            systemen aan elkaar knopen en kijken hoever ik kom.
          </p>
          <p className="text-base text-white leading-relaxed max-w-2xl mt-4 opacity-80">
            Dit doe ik niet voor klanten. Ik bouw het voor mezelf, om ervaring op te doen en om mijn
            eigen werk slimmer te maken. Leren door het gewoon te maken.
          </p>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-white mb-3">Waar ik mee experimenteer</p>
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
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-white mb-3">Waar mijn interesse vandaan komt</p>
            <h2 className="text-3xl font-black tracking-tight text-white mb-8">Overzicht is het echte probleem.</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="max-w-3xl pl-6 space-y-5 text-base text-white leading-[1.9]"
              style={{ borderLeft: "2px solid rgba(125,211,252,0.35)" }}
            >
              <p>
                Bij de meeste organisaties zit de strategie in het ene document, staan de cijfers in het andere
                en zit de rest in iemands hoofd. Hoe groter het bedrijf wordt, hoe meer overzicht er verdwijnt.
              </p>
              <p>
                Ik heb van dichtbij gezien wat er gebeurt als je dat wél op één plek zet, en dat is blijven hangen.
                Zelf bouw ik dat op kleinere schaal na: dashboards waarin ik in één scherm zie wat er speelt, en
                koppelingen die de gegevens er automatisch in krijgen.
              </p>
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
              Werk jij hier ook aan?
            </h2>
            <p className="text-base text-white opacity-90 mb-7 max-w-xl mx-auto">
              Ik leer het meeste van mensen die dit al doen. Zit je in dezelfde hoek of heb je een goed idee waar ik mijn
              tanden in kan zetten, dan hoor ik het graag.
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
