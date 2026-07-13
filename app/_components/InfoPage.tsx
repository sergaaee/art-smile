import type { ReactNode } from "react";
import Link from "next/link";

export default function InfoPage({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      {lead && <p className="mt-4 text-lg text-slate-600">{lead}</p>}
      <div className="prose-content mt-10 space-y-5 text-sm leading-7 text-slate-700 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-slate-900 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
      <div className="mt-12 border-t border-slate-200 pt-6">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
