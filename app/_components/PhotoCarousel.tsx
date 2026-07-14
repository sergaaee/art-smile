"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PhotoCarousel({ photos }: { photos: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] bg-blue-600/5 lg:max-w-none">
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Стоматология «АРТ-СМАИЛ» — фото ${i + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Показать фото ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
