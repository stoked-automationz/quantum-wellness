"use client";

import { useState, useEffect, useCallback } from "react";

interface SacredPauseButtonProps {
  onActivate: () => void;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  angle: number;
  distance: number;
}

export function SacredPauseButton({ onActivate }: SacredPauseButtonProps) {
  const [showPopover, setShowPopover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [burstParticles, setBurstParticles] = useState<Sparkle[]>([]);

  // Generate ambient sparkles that orbit/twinkle around the diamond
  useEffect(() => {
    const generateSparkle = (): Sparkle => ({
      id: Math.random(),
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 60,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 1.5,
      angle: Math.random() * 360,
      distance: Math.random() * 20 + 18,
    });

    // Start with a few sparkles
    setSparkles(Array.from({ length: 6 }, generateSparkle));

    // Periodically refresh sparkles so they feel random and intermittent
    const interval = setInterval(() => {
      setSparkles((prev) => {
        const updated = [...prev];
        const idx = Math.floor(Math.random() * updated.length);
        updated[idx] = generateSparkle();
        return updated;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Generate burst particles on hover
  useEffect(() => {
    if (isHovered) {
      const particles: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
        id: Math.random(),
        x: 0,
        y: 0,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 0.15,
        duration: Math.random() * 0.6 + 0.4,
        angle: (360 / 20) * i + Math.random() * 18,
        distance: Math.random() * 50 + 30,
      }));
      setBurstParticles(particles);
    } else {
      setBurstParticles([]);
    }
  }, [isHovered]);

  const handleClick = useCallback(() => {
    setShowPopover((prev) => !prev);
  }, []);

  const handleYes = useCallback(() => {
    setShowPopover(false);
    onActivate();
  }, [onActivate]);

  const handleDismiss = useCallback(() => {
    setShowPopover(false);
  }, []);

  return (
    <>
      <style>{`
        @keyframes sp-pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(126, 200, 227, 0.3))
                    drop-shadow(0 0 12px rgba(212, 175, 55, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(126, 200, 227, 0.5))
                    drop-shadow(0 0 20px rgba(212, 175, 55, 0.35));
          }
        }

        @keyframes sp-pulse-glow-bright {
          0%, 100% {
            filter: drop-shadow(0 0 12px rgba(126, 200, 227, 0.7))
                    drop-shadow(0 0 24px rgba(212, 175, 55, 0.5))
                    drop-shadow(0 0 40px rgba(126, 200, 227, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(126, 200, 227, 0.9))
                    drop-shadow(0 0 32px rgba(212, 175, 55, 0.6))
                    drop-shadow(0 0 48px rgba(126, 200, 227, 0.3));
          }
        }

        @keyframes sp-sparkle-fade {
          0%, 100% { opacity: 0; transform: scale(0); }
          20%, 80% { opacity: 1; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes sp-orbit {
          0% { transform: rotate(0deg) translateX(var(--sp-orbit-distance)) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(var(--sp-orbit-distance)) rotate(-360deg); }
        }

        @keyframes sp-burst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          60% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translate(var(--sp-burst-x), var(--sp-burst-y)) scale(0);
          }
        }

        @keyframes sp-popover-enter {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes sp-popover-exit {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(8px) scale(0.95);
          }
        }

        @keyframes sp-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .sp-diamond-btn {
          animation: sp-pulse-glow 3s ease-in-out infinite;
        }

        .sp-diamond-btn:hover {
          animation: sp-pulse-glow-bright 1.5s ease-in-out infinite;
        }

        .sp-sparkle-dot {
          animation: sp-sparkle-fade var(--sp-sparkle-duration) ease-in-out infinite;
          animation-delay: var(--sp-sparkle-delay);
        }

        .sp-burst-particle {
          animation: sp-burst 0.7s ease-out forwards;
          animation-delay: var(--sp-burst-delay);
        }

        .sp-popover {
          animation: sp-popover-enter 0.25s ease-out forwards;
        }

        .sp-yes-btn {
          background: linear-gradient(135deg, #D4AF37, #B8962E);
          background-size: 200% auto;
        }

        .sp-yes-btn:hover {
          background: linear-gradient(90deg, #D4AF37, #F0D060, #D4AF37);
          background-size: 200% auto;
          animation: sp-shimmer 1.5s linear infinite;
        }
      `}</style>

      <div className="fixed bottom-6 left-6 z-50">
        {/* Popover */}
        {showPopover && (
          <div
            className="sp-popover absolute bottom-full left-0 mb-3"
            style={{ width: "220px" }}
          >
            <div
              className="rounded-xl p-4"
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.08)",
              }}
            >
              <p
                className="font-heading text-center text-sm mb-4"
                style={{
                  color: "#D4AF37",
                  lineHeight: "1.5",
                  letterSpacing: "0.02em",
                }}
              >
                Begin a Sacred Pause?
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={handleYes}
                  className="sp-yes-btn font-heading rounded-lg px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    color: "#0A0A0A",
                    letterSpacing: "0.04em",
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={handleDismiss}
                  className="font-heading rounded-lg px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    color: "#D4AF37",
                    background: "transparent",
                    border: "1px solid rgba(212, 175, 55, 0.35)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 175, 55, 0.7)";
                    e.currentTarget.style.background =
                      "rgba(212, 175, 55, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 175, 55, 0.35)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Not now
                </button>
              </div>

              {/* Popover arrow / tail */}
              <div
                className="absolute -bottom-1.5 left-5"
                style={{
                  width: "12px",
                  height: "12px",
                  background: "#1A1A1A",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderTop: "none",
                  borderLeft: "none",
                  transform: "rotate(45deg)",
                }}
              />
            </div>
          </div>
        )}

        {/* Sparkle field — ambient orbiting particles */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            width: "44px",
            height: "44px",
          }}
        >
          {sparkles.map((sparkle) => {
            const rad = (sparkle.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * sparkle.distance;
            const ty = Math.sin(rad) * sparkle.distance;
            return (
              <div
                key={sparkle.id}
                className="sp-sparkle-dot absolute rounded-full"
                style={{
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  background: "#D4AF37",
                  boxShadow: "0 0 4px rgba(212, 175, 55, 0.8)",
                  left: `calc(50% + ${tx}px)`,
                  top: `calc(50% + ${ty}px)`,
                  "--sp-sparkle-delay": `${sparkle.delay}s`,
                  "--sp-sparkle-duration": `${sparkle.duration}s`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>

        {/* Burst particles — on hover */}
        {burstParticles.map((particle) => {
          const rad = (particle.angle * Math.PI) / 180;
          const bx = Math.cos(rad) * particle.distance;
          const by = Math.sin(rad) * particle.distance;
          return (
            <div
              key={particle.id}
              className="sp-burst-particle absolute rounded-full pointer-events-none"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background:
                  particle.size > 2.5
                    ? "#F0D060"
                    : "#D4AF37",
                boxShadow:
                  particle.size > 2
                    ? "0 0 6px rgba(212, 175, 55, 0.9)"
                    : "0 0 3px rgba(212, 175, 55, 0.6)",
                left: "22px",
                top: "22px",
                "--sp-burst-x": `${bx}px`,
                "--sp-burst-y": `${by}px`,
                "--sp-burst-delay": `${particle.delay}s`,
              } as React.CSSProperties}
            />
          );
        })}

        {/* Diamond Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="sp-diamond-btn relative cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none"
          style={{
            width: "44px",
            height: "44px",
            background: "transparent",
            border: "none",
            padding: 0,
          }}
          aria-label="Sacred Pause"
        >
          {/* 4-point star / diamond SVG with blue accents */}
          <svg
            viewBox="0 0 100 100"
            width="44"
            height="44"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <defs>
              <linearGradient
                id="sp-diamond-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#7EC8E3" />
                <stop offset="25%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F0D060" />
                <stop offset="75%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#7EC8E3" />
              </linearGradient>
              <radialGradient
                id="sp-diamond-center"
                cx="50%"
                cy="50%"
                r="35%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              <filter id="sp-inner-glow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                <feFlood floodColor="#7EC8E3" floodOpacity="0.4" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 4-point star: top, right, bottom, left with pinched center */}
            <polygon
              points="50,2 58,38 98,50 58,62 50,98 42,62 2,50 42,38"
              fill="url(#sp-diamond-grad)"
              filter="url(#sp-inner-glow)"
              stroke="rgba(126,200,227,0.5)"
              strokeWidth="0.5"
            />

            {/* Center glow */}
            <circle
              cx="50"
              cy="50"
              r="16"
              fill="url(#sp-diamond-center)"
            />

            {/* Inner facet lines */}
            <line x1="50" y1="2" x2="50" y2="98" stroke="rgba(212,175,55,0.12)" strokeWidth="0.5" />
            <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(212,175,55,0.12)" strokeWidth="0.5" />
            <line x1="42" y1="38" x2="58" y2="62" stroke="rgba(126,200,227,0.15)" strokeWidth="0.5" />
            <line x1="58" y1="38" x2="42" y2="62" stroke="rgba(126,200,227,0.15)" strokeWidth="0.5" />
          </svg>
        </button>
      </div>
    </>
  );
}
