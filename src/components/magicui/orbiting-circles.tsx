import React, { useEffect, useState } from 'react'
import { cn } from "../lib/utils";

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  defaultRadius = 50,
  smallScreenRadius = 30,
  path = true,
}: {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  defaultRadius?: number;
  smallScreenRadius?: number;
  path?: boolean;
}) {

  const [radius, setRadius] = useState(defaultRadius);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(smallScreenRadius);
      } else {
        setRadius(defaultRadius);
      }
    };

    window.addEventListener('resize', updateRadius);
    updateRadius();

    return () => window.removeEventListener('resize', updateRadius);
  }, [defaultRadius, smallScreenRadius]);
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray={"4 4"}
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
