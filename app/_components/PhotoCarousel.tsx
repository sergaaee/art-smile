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

      <button
        type="button"
        onClick={() => setIndex((current) => (current - 1 + photos.length) % photos.length)}
        aria-label="Предыдущее фото"
        className="absolute left-4 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[20px] border-r-[32px] border-y-transparent border-r-white transition-opacity hover:opacity-70"
      />
      <button
        type="button"
        onClick={() => setIndex((current) => (current + 1) % photos.length)}
        aria-label="Следующее фото"
        className="absolute right-4 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[20px] border-l-[32px] border-y-transparent border-l-white transition-opacity hover:opacity-70"
      />
    </div>
  );
}
