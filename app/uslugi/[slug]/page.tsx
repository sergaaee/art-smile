import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InfoPage from "../../_components/InfoPage";
import { serviceDetails } from "../../_data/serviceDetails";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} — АРТ-СМАИЛ`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <InfoPage title={service.title} lead={service.summary}>
      <div className="relative -mt-4 mb-6 aspect-[2/1] overflow-hidden rounded-2xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {service.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>Что входит</h2>
      <ul>
        {service.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Показания</h2>
      <ul>
        {service.indications.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p>
        Точную стоимость и план лечения врач озвучит на очной консультации.
        Ознакомиться с ценами можно в разделе{" "}
        <Link href="/#tseny" className="text-blue-700 hover:underline">
          «Цены»
        </Link>
        , а записаться на приём — в разделе{" "}
        <Link href="/#kontakty" className="text-blue-700 hover:underline">
          «Контакты»
        </Link>
        .
      </p>
    </InfoPage>
  );
}
