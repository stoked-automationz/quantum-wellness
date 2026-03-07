"use client";

import { useState } from "react";
import { SacredPauseButton } from "./sacred-pause-button";
import { BreathingSession } from "./breathing-session";

export function SacredPause() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <SacredPauseButton onActivate={() => setIsActive(true)} />
      {isActive && <BreathingSession onClose={() => setIsActive(false)} />}
    </>
  );
}