"use client";

import { useEffect, useRef, useState } from "react";
import "@yandex/ymaps3-default-ui-theme/dist/esm/index.css";
import type { Location } from "../_data/locations";
import type * as Ymaps3 from "ymaps3";

declare global {
  interface Window {
    ymaps3?: typeof Ymaps3;
  }
}

const API_KEY = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

let coreLoadPromise: Promise<typeof Ymaps3> | null = null;

function loadYmapsCore(apiKey: string): Promise<typeof Ymaps3> {
  if (window.ymaps3) return Promise.resolve(window.ymaps3);
  if (coreLoadPromise) return coreLoadPromise;

  coreLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = () => {
      const ymaps3 = window.ymaps3;
      if (!ymaps3) {
        reject(new Error("Яндекс.Карты не инициализировались"));
        return;
      }
      ymaps3.ready.then(() => resolve(ymaps3));
    };
    script.onerror = () => reject(new Error("Не удалось загрузить Яндекс.Карты"));
    document.head.appendChild(script);
  });

  return coreLoadPromise;
}

const ZOOM = 16;

function yandexMapsRouteUrl(location: Location) {
  // rtext использует порядок широта,долгота (в отличие от pt/ll); "~" перед
  // точкой назначения означает маршрут от текущего местоположения пользователя.
  return `https://yandex.ru/maps/?rtext=~${location.lat},${location.lon}`;
}

export default function LocationMap({ location }: { location: Location }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<InstanceType<typeof Ymaps3.YMap> | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    API_KEY ? "loading" : "error"
  );

  useEffect(() => {
    if (!API_KEY) return;

    let cancelled = false;

    (async () => {
      try {
        const ymaps3 = await loadYmapsCore(API_KEY);
        const theme = await import("@yandex/ymaps3-default-ui-theme");
        if (cancelled || !containerRef.current) return;

        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
        const { YMapDefaultMarker } = theme;

        const map = new YMap(
          containerRef.current,
          {
            location: { center: [location.lon, location.lat], zoom: ZOOM },
            showScaleInCopyrights: false,
          },
          [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
        );
        mapRef.current = map;

        map.addChild(
          new YMapDefaultMarker({
            coordinates: [location.lon, location.lat],
            title: location.name,
            subtitle: location.address,
            color: "darkblue",
            size: "normal",
          })
        );

        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, [location]);

  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
      <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-900">{location.shortName}</h3>
        <a
          href={yandexMapsRouteUrl(location)}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs font-semibold text-blue-700 hover:underline"
        >
          Проложить маршрут →
        </a>
      </div>

      {status === "error" ? (
        <div className="flex h-72 flex-col items-center justify-center gap-2 bg-slate-100 text-center text-sm text-slate-500">
          <p>Карта временно недоступна.</p>
          <a
            href={yandexMapsRouteUrl(location)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 hover:underline"
          >
            Проложить маршрут в Яндекс.Картах
          </a>
        </div>
      ) : (
        <div className="relative h-72">
          <div ref={containerRef} className="h-full w-full" />
          {status === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-sm text-slate-500">
              Загрузка карты…
            </div>
          )}
        </div>
      )}
    </div>
  );
}
