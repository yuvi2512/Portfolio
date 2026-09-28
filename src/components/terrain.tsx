"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

function StaticLandscape() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,255,63,0.55),rgba(154,166,255,0.2)_42%,transparent_68%)] blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30" />
    </div>
  );
}

const Scene = dynamic(() => import("@/components/terrain-scene"), {
  ssr: false,
  loading: () => null,
});

let webglAllowed: boolean | null = null;

function subscribeToMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const notify = () => {
    webglAllowed = null;
    onChange();
  };
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
}

function canRenderTerrain() {
  if (webglAllowed !== null) return webglAllowed;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    webglAllowed = false;
    return webglAllowed;
  }
  const canvas = document.createElement("canvas");
  webglAllowed = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  return webglAllowed;
}

export function Terrain() {
  const live = useSyncExternalStore(subscribeToMotion, canRenderTerrain, () => false);

  return (
    <div className="absolute inset-0" aria-hidden>
      <StaticLandscape />
      {live ? <Scene /> : null}
    </div>
  );
}
