import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Фотогалерея — АРТ-СМАИЛ",
  description: "Фотографии клиники «АРТ-СМАИЛ».",
};

const photos = Array.from({ length: 6 }, (_, i) => `/gallery/img${i + 1}.jpg`);

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Фотогалерея
      </h1>
      <p className="mt-4 text-lg text-slate-600">Кабинеты и оборудование клиники.</p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((src, index) => (
          <a
            key={src}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-slate-200"
          >
            <Image
              src={src}
              alt={`Стоматология «АРТ-СМАИЛ» — фото ${index + 1}`}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-opacity hover:opacity-90"
            />
          </a>
        ))}
      </div>

      <div className="mt-12 border-t border-slate-200 pt-6">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
