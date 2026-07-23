import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../_components/InfoPage";

export const metadata: Metadata = {
  title: "Акции и скидки — АРТ-СМАИЛ",
  description: "Действующие акции и скидки стоматологии «АРТ-СМАИЛ».",
  alternates: { canonical: "/akcii" },
};

export default function PromotionsPage() {
  return (
    <InfoPage
      title="Акции и скидки"
      lead="На данный момент временных акций нет."
    >
      <p>
        Подробнее о ценах — в разделе{" "}
        <Link href="/#tseny" className="text-blue-700 hover:underline">
          «Цены»
        </Link>
        . Следите за обновлениями на этой странице — здесь будут появляться
        новые акции клиники.
      </p>
    </InfoPage>
  );
}
