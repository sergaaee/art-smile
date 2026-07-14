"use client";

import { useState } from "react";
import { priceCategories, type PriceItem } from "../_data/prices";
import { ChevronDownIcon } from "./icons";

const currency = new Intl.NumberFormat("ru-RU");

function formatPrice(price: number) {
  return price > 0 ? `${currency.format(price)} ₽` : "Бесплатно";
}

function groupBySubcategory(items: PriceItem[]) {
  const groups = new Map<string, PriceItem[]>();
  for (const item of items) {
    const key = item.subcategory ?? "";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(item);
  }
  return Array.from(groups.entries());
}

export default function PriceList() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    priceCategories[0]?.category ?? null
  );

  return (
    <div
      className="select-none divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200"
      onCopy={(event) => event.preventDefault()}
      onContextMenu={(event) => event.preventDefault()}
    >
      {priceCategories.map(({ category, items }) => {
        const isOpen = openCategory === category;

        return (
          <div key={category}>
            <button
              type="button"
              onClick={() => setOpenCategory(isOpen ? null : category)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span>
                <span className="block text-base font-semibold text-slate-900">{category}</span>
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <div className="mb-2 flex items-center justify-between gap-4 px-4 text-xs uppercase tracking-wide text-slate-500">
                  <span>Наименование услуги</span>
                  <span>Цена</span>
                </div>
                {groupBySubcategory(items).map(([subcategory, subItems]) => (
                  <div key={subcategory || "_"} className="mb-4 last:mb-0">
                    {subcategory && (
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
                        {subcategory}
                      </h4>
                    )}
                    <ul className="divide-y divide-slate-300 overflow-hidden rounded-xl bg-slate-200">
                      {subItems.map((item, index) => (
                        <li
                          key={`${item.name}-${item.price}-${index}`}
                          className="flex items-start font-semibold justify-between gap-4 px-4 py-3 text-sm"
                        >
                          <span className="text-slate-700">{item.name}</span>
                          <span className="shrink-0 whitespace-nowrap font-semibold text-slate-900">
                            {formatPrice(item.price)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
