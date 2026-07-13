import Image from "next/image";
import { partners } from "../_data/partners";

export default function PartnersCarousel() {
  const items = [...partners, ...partners];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max animate-marquee items-stretch gap-12">
        {items.map((partner, index) => (
          <a
            key={`${partner.name}-${index}`}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-44 shrink-0 flex-col items-center gap-2 text-center"
          >
            <Image
              src={partner.src}
              alt={partner.name}
              width={104}
              height={90}
              className="h-16 w-auto"
            />
            <span className="text-xs leading-4 text-slate-500">{partner.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
