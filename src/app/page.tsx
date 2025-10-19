import Image from "next/image";
import Link from "next/link";
import { CircleDollarSign, HeartHandshake, Leaf, ArrowUpRight } from "lucide-react";
import aneSite from "@/app/ane_site.png";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const initiatives = [
  {
    title: "Economie & emplois",
    description: [
      "Création de 10 000 emplois dans le cadre de la politique de nettoyage des bottes boueuses",
      "Suppression de la taxe sur les oignons et la bière",
    ],
    accent: "from-emerald-500/60 to-lime-400/25",
    icon: CircleDollarSign,
  },
  {
    title: "Vivre Ensemble",
    description:
      "Réunir le peuple et la noblesse autour d'une grande tablée de ragoût aux oignons caramélisées",
    accent: "from-green-500/60 to-teal-400/25",
    icon: HeartHandshake,
  },
  {
    title: "Ecologie & territoire",
    // Render as an array so we can display bullets in the UI
    description: [
      "Installer des filtres à air près des maisons des ogres",
      "Créer des passerelles pour protéger les champignons fluorescents",
    ],
    accent: "from-lime-500/60 to-amber-300/25",
    icon: Leaf,
  },
];

const highlights = [
  { label: "Bottes boueuses nettoyées", value: "12 408" },
  { label: "Evénements multiculturels organisés", value: "48" },
  { label: "Hectares de champignons sauvés", value: "80" },
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
              Sur le territoire, chaque gargouillis compte. Soutenez une campagne qui défend: le libre échange des produits de première nécessité, le port de bottes propres, la mixité sociale et l'écologie.
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

          <div className="w-full max-w-lg">
            <h2 className="mb-4 text-lg font-semibold text-emerald-100">Témoignagnes</h2>
            <TestimonialCarousel
              items={[
                {
                  image: '/shrek.png',
                  text:
                    '« Un leader doit sentir l\'oignon, sinon comment sentirait-il son peuple ? »',
                  author: 'Ogre Anonyme',
                },
                {
                  image: '/drake.png',
                  text: '« L\'Ane Cornu, c\'est le candidat idéal pour notre situation. »',
                  author: "Dragonne Amoureuse",
                },
                {
                  image: '/epice.jpg',
                  text: "« Avant, je vivais dans la peur. Maintenant, c'est pareil, mais j'ai un espoir. »",
                  author: "Pain d'Epices soucieux",
                },
              ]}
            />
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

      <section id="initiatives" className="mx-auto max-w-6xl px-6 pb-20">
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
                {Array.isArray(description) ? (
                  <ul className="text-sm leading-relaxed text-emerald-100/85 list-disc pl-5 space-y-1">
                    {description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-relaxed text-emerald-100/85">{description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
