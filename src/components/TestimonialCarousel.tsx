"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Item = {
  image: any;
  text: string;
  author?: string;
};

export default function TestimonialCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 8000);
    return () => clearInterval(t);
  }, [items]);

  if (!items || items.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur">
        <Image
          src={items[index].image}
          alt={items[index].author ?? "Témoignagne"}
          width={900}
          height={900}
          className="h-80 w-full object-cover sm:h-[28rem]"
          priority={index === 0}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 mx-auto max-w-xs text-sm text-emerald-100/90">
          <p className="mb-2">{items[index].text}</p>
          {items[index].author && (
            <p className="text-xs text-emerald-200/80">— {items[index].author}</p>
          )}
        </div>

        <button
          aria-label="Précédent"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
        >
          ‹
        </button>

        <button
          aria-label="Suivant"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
        >
          ›
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller au témoignage ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition-all ${
              i === index ? "bg-emerald-300" : "bg-emerald-800/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
