import Image from "next/image";
import Link from "next/link";
import { Flag, Globe2, Leaf, ArrowUpRight } from "lucide-react";
import aneSite from "@/app/ane_site.png";

const initiatives = [
  {
    title: "Marais Propre",
    description:
      "Ramasser chaque botte de boue scintillante pour que le marais reflète le plus beau des couchers de soleil verdâtres.",
    accent: "from-emerald-500/60 to-lime-400/25",
    icon: Flag,
  },
  {
    title: "Alliance des Créatures",
    description:
      "Réunir loups-garous, fées, dragons et ogres autour d'une grande tablée de ragoût aux oignons caramélisés.",
    accent: "from-green-500/60 to-teal-400/25",
    icon: Globe2,
  },
  {
    title: "Écosystème Boueux",
    description:
      "Créer des passerelles en rondins, protéger les champignons fluorescents et laisser pousser les algues musicales.",
    accent: "from-lime-500/60 to-amber-300/25",
    icon: Leaf,
  },
];

const highlights = [
  { label: "Bottes de boue cirées", value: "12 408" },
  { label: "Cri de ralliement d'ânes", value: "48" },
  { label: "Couches d'oignon assumées", value: "7" },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#04140a] text-emerald-50">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.28),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_45%),linear-gradient(135deg,_rgba(6,78,59,0.35),_transparent_55%)]" />

      <section className="relative">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-28 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ensemble, parfumons le royaume à l'oignon
            </h1>
            <p className="text-lg text-emerald-100/80">
              Dans ce marais, chaque gargouillis compte. Soutenez une campagne qui défend les couches, les rots assumés et un humour ogresque sans filtre.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#initiatives"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Découvrir le programme
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur">
            <Image
              src={aneSite}
              alt="Candidat ogre saluant depuis un marais"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs text-sm text-emerald-100/90">
              « Un leader doit sentir l'oignon, sinon comment sentirait-il son peuple ? »
            </p>
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <div className="grid gap-6 rounded-3xl border border-emerald-300/15 bg-emerald-900/30 p-8 backdrop-blur lg:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-2xl border border-emerald-400/20 bg-emerald-950/50 p-6 text-center shadow-lg shadow-emerald-950/30"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                {highlight.label}
              </span>
              <p className="mt-4 text-4xl font-bold text-lime-200">{highlight.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="initiatives" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Moments forts du marais
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Gonflons la monture pour demain
          </h2>
          <p className="max-w-2xl text-base text-slate-300/80">
            Chaque idée est une couche supplémentaire : plus on pèle, plus ça pique les yeux… et plus on rit. Découvrez comment l'Ane Cornu compte aromatiser la politique.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map(({ title, description, accent, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-emerald-400/15 bg-emerald-900/25 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-900/35"
            >
              <div
                aria-hidden
                className={`absolute inset-0 -z-10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100 group-hover:blur-2xl bg-gradient-to-br ${accent}`}
              />
              <div className="relative space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-950/60 shadow-lg shadow-emerald-900/40">
                  <Icon className="h-6 w-6 text-lime-200" />
                </span>
                <h3 className="text-xl font-semibold text-lime-100">{title}</h3>
                <p className="text-sm leading-relaxed text-emerald-100/85">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
