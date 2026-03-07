"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Future Audio Integration ───
// TODO: Add binaural beats audio (theta wave 4-7Hz recommended for deep meditation)
// TODO: Add optional voice-guided cues ("Inhale... Hold... Exhale... Hold...")
// Implementation: use Web Audio API or Howler.js for cross-browser support
// Consider: fade audio in/out on session start/end

type BreathPhase = "inhale" | "hold-top" | "exhale" | "hold-bottom";

interface BreathingSessionProps {
  onClose: () => void;
}

const PHASE_DURATION = 4000; // 4 seconds per phase

const PHASE_SEQUENCE: BreathPhase[] = [
  "inhale",
  "hold-top",
  "exhale",
  "hold-bottom",
];

const PHASE_LABELS: Record<BreathPhase, string> = {
  inhale: "Inhale...",
  "hold-top": "Hold...",
  exhale: "Exhale...",
  "hold-bottom": "Hold...",
};

// Generate deterministic star positions (avoids re-render jitter)
function generateStars(count: number): { x: number; y: number; size: number; delay: number; duration: number; gold: boolean }[] {
  const stars = [];
  // Use a simple seeded sequence for consistency
  let seed = 42;
  const pseudoRandom = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = 0; i < count; i++) {
    stars.push({
      x: pseudoRandom() * 100,
      y: pseudoRandom() * 100,
      size: pseudoRandom() * 2 + 0.5,
      delay: pseudoRandom() * 8,
      duration: pseudoRandom() * 4 + 3,
      gold: pseudoRandom() > 0.75, // 25% of stars are gold-tinted
    });
  }
  return stars;
}

const STARS = generateStars(200);

// Geometry ring configuration
const GEOMETRY_RINGS = [
  { radius: 140, segments: 6, rotationSpeed: 1 },
  { radius: 180, segments: 8, rotationSpeed: -0.7 },
  { radius: 220, segments: 12, rotationSpeed: 0.5 },
  { radius: 270, segments: 16, rotationSpeed: -0.3 },
  { radius: 320, segments: 24, rotationSpeed: 0.2 },
];

export function BreathingSession({ onClose }: BreathingSessionProps) {
  const [phase, setPhase] = useState<BreathPhase>("inhale");
  const [breathCount, setBreathCount] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [mounted, setMounted] = useState(false);
  const phaseIndexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Mount animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Breathing state machine
  const advancePhase = useCallback(() => {
    phaseIndexRef.current = (phaseIndexRef.current + 1) % 4;
    const nextPhase = PHASE_SEQUENCE[phaseIndexRef.current];
    setPhase(nextPhase);

    // Increment breath count when we complete a full cycle (returning to inhale)
    if (nextPhase === "inhale") {
      setBreathCount((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    timerRef.current = setInterval(advancePhase, PHASE_DURATION);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, advancePhase]);

  const handleClose = useCallback(() => {
    setIsActive(false);
    setMounted(false);
    // Allow fade-out animation before calling onClose
    setTimeout(onClose, 500);
  }, [onClose]);

  // Determine orb scale and geometry scale based on phase
  const isExpanded = phase === "inhale" || phase === "hold-top";
  const orbScale = isExpanded ? 1 : 0.4; // 200px expanded / 80px contracted (relative to 200px base)
  const geometryScale = isExpanded ? 1.3 : 0.7;
  const geometryRotation = phase === "inhale" || phase === "hold-top" ? 30 : -30;

  return (
    <>
      <style jsx>{`
        /* ─── Star Twinkle ─── */
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes twinkle-gold {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }

        /* ─── Orb Pulse Glow ─── */
        @keyframes orb-pulse {
          0%, 100% {
            box-shadow:
              0 0 30px rgba(212, 175, 55, 0.4),
              0 0 60px rgba(196, 96, 29, 0.3),
              0 0 100px rgba(139, 26, 26, 0.2);
          }
          50% {
            box-shadow:
              0 0 40px rgba(212, 175, 55, 0.6),
              0 0 80px rgba(196, 96, 29, 0.4),
              0 0 120px rgba(139, 26, 26, 0.3);
          }
        }

        /* ─── Breathing Orb ─── */
        .breathing-orb {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            #D4AF37 0%,
            #C4601D 40%,
            #8B1A1A 75%,
            rgba(139, 26, 26, 0) 100%
          );
          animation: orb-pulse 3s ease-in-out infinite;
          transition: transform 4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .breathing-orb.expanded {
          transform: scale(1);
        }

        .breathing-orb.contracted {
          transform: scale(0.4);
        }

        /* ─── Orb Aura ─── */
        .orb-aura {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(212, 175, 55, 0.15) 0%,
            rgba(196, 96, 29, 0.08) 40%,
            rgba(139, 26, 26, 0.04) 70%,
            transparent 100%
          );
          transition: transform 4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }

        .orb-aura.expanded {
          transform: scale(1.3);
          opacity: 1;
        }

        .orb-aura.contracted {
          transform: scale(0.6);
          opacity: 0.5;
        }

        /* ─── Sacred Geometry Rings ─── */
        .geometry-container {
          transition: transform 4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .geometry-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid transparent;
          transition: transform 4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }

        /* Ring colors — warm fiery spectrum */
        .ring-0 {
          border-color: rgba(212, 175, 55, 0.35);
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.15);
        }
        .ring-1 {
          border-color: rgba(196, 96, 29, 0.30);
          box-shadow: 0 0 8px rgba(196, 96, 29, 0.12);
        }
        .ring-2 {
          border-color: rgba(175, 60, 20, 0.25);
          box-shadow: 0 0 8px rgba(175, 60, 20, 0.10);
        }
        .ring-3 {
          border-color: rgba(139, 26, 26, 0.20);
          box-shadow: 0 0 8px rgba(139, 26, 26, 0.08);
        }
        .ring-4 {
          border-color: rgba(100, 20, 60, 0.15);
          box-shadow: 0 0 8px rgba(100, 20, 60, 0.06);
        }

        /* ─── Geometry Nodes (dots on the rings) ─── */
        .geometry-node {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.6);
        }

        /* ─── Radiating Lines ─── */
        .radial-line {
          position: absolute;
          width: 1px;
          height: 100px;
          transform-origin: bottom center;
          transition: height 4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: height, opacity;
        }

        .radial-line.expanded {
          height: 150px;
          opacity: 0.3;
        }

        .radial-line.contracted {
          height: 40px;
          opacity: 0.1;
        }

        /* ─── Phase Text ─── */
        .phase-text {
          transition: opacity 0.6s ease-in-out;
        }

        /* ─── Overlay fade ─── */
        .session-overlay {
          transition: opacity 0.5s ease-in-out;
        }

        /* ─── Rotating geometry animation ─── */
        @keyframes slow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slow-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .rotate-slow {
          animation: slow-rotate 60s linear infinite;
        }

        .rotate-slow-reverse {
          animation: slow-rotate-reverse 80s linear infinite;
        }

        .rotate-slower {
          animation: slow-rotate 120s linear infinite;
        }

        .rotate-slower-reverse {
          animation: slow-rotate-reverse 100s linear infinite;
        }

        .rotate-slowest {
          animation: slow-rotate 160s linear infinite;
        }

        /* Pause rotation during hold phases */
        .geometry-paused {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={`session-overlay fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "#0A0A0A" }}
        role="dialog"
        aria-label="Breathing session"
      >
        {/* ─── Starry Background ─── */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {STARS.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.gold
                  ? "rgba(212, 175, 55, 0.8)"
                  : "rgba(255, 255, 255, 0.8)",
                animation: `${star.gold ? "twinkle-gold" : "twinkle"} ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}

          {/* Subtle cosmic nebula wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(139, 26, 26, 0.04) 0%, transparent 50%), " +
                "radial-gradient(ellipse at 70% 80%, rgba(100, 20, 60, 0.03) 0%, transparent 50%), " +
                "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.02) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* ─── End Session Button ─── */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 font-heading text-sm tracking-widest uppercase text-white/40 hover:text-white/80 transition-colors duration-300 cursor-pointer"
          aria-label="End breathing session"
        >
          End Session
        </button>

        {/* ─── Central Breathing Composition ─── */}
        <div className="relative flex items-center justify-center" aria-hidden="true">
          {/* Sacred Geometry — Radiating Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (360 / 12) * i;
              return (
                <div
                  key={`line-${i}`}
                  className={`radial-line ${isExpanded ? "expanded" : "contracted"}`}
                  style={{
                    position: "absolute",
                    transformOrigin: "bottom center",
                    transform: `rotate(${angle}deg) translateY(-50px)`,
                    background: `linear-gradient(to top, rgba(212, 175, 55, 0.3), rgba(196, 96, 29, 0.15), transparent)`,
                  }}
                />
              );
            })}
          </div>

          {/* Sacred Geometry — Concentric Rings */}
          {GEOMETRY_RINGS.map((ring, ringIndex) => {
            const isPaused = phase === "hold-top" || phase === "hold-bottom";
            const rotationClasses = [
              "rotate-slow",
              "rotate-slow-reverse",
              "rotate-slower",
              "rotate-slower-reverse",
              "rotate-slowest",
            ];
            const scaleVal = isExpanded
              ? 1 + ringIndex * 0.08
              : 0.6 + ringIndex * 0.04;

            return (
              <div
                key={`ring-${ringIndex}`}
                className={`geometry-ring ring-${ringIndex} ${rotationClasses[ringIndex]} ${
                  isPaused ? "geometry-paused" : ""
                }`}
                style={{
                  width: `${ring.radius * 2}px`,
                  height: `${ring.radius * 2}px`,
                  left: `50%`,
                  top: `50%`,
                  marginLeft: `-${ring.radius}px`,
                  marginTop: `-${ring.radius}px`,
                  transform: `scale(${scaleVal})`,
                }}
              >
                {/* Nodes on the ring */}
                {Array.from({ length: ring.segments }).map((_, nodeIndex) => {
                  const nodeAngle = (360 / ring.segments) * nodeIndex;
                  const rad = (nodeAngle * Math.PI) / 180;
                  const nx = Math.cos(rad) * ring.radius + ring.radius;
                  const ny = Math.sin(rad) * ring.radius + ring.radius;
                  const colors = [
                    "rgba(212, 175, 55, 0.6)",
                    "rgba(196, 96, 29, 0.5)",
                    "rgba(175, 60, 20, 0.4)",
                    "rgba(139, 26, 26, 0.35)",
                    "rgba(100, 20, 60, 0.3)",
                  ];
                  return (
                    <div
                      key={`node-${ringIndex}-${nodeIndex}`}
                      className="geometry-node"
                      style={{
                        left: `${nx}px`,
                        top: `${ny}px`,
                        transform: "translate(-50%, -50%)",
                        backgroundColor: colors[ringIndex],
                      }}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* Orb Aura (outer glow) */}
          <div
            className={`orb-aura absolute ${isExpanded ? "expanded" : "contracted"}`}
          />

          {/* Breathing Orb */}
          <div
            className={`breathing-orb relative z-10 ${
              isExpanded ? "expanded" : "contracted"
            }`}
          />
        </div>

        {/* ─── Phase Text Cue ─── */}
        <div className="relative z-10 mt-12 h-12 flex items-center justify-center">
          <p
            className="phase-text font-heading text-2xl sm:text-3xl tracking-widest"
            style={{ color: "#D4AF37" }}
            aria-live="assertive"
          >
            {PHASE_LABELS[phase]}
          </p>
        </div>

        {/* ─── Breath Counter ─── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <p
            className="font-heading text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(212, 175, 55, 0.35)" }}
          >
            Breath {breathCount}
          </p>
        </div>
      </div>
    </>
  );
}
