"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  threshold?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  id,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";

    const baseClass = "opacity-100";
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : "";

    switch (animation) {
      case "fade-up":
        return cn(
          baseClass,
          "animate-fade-in-up",
          delayClass,
          "transition-all duration-800 ease-out"
        );
      case "slide-left":
        return cn(
          baseClass,
          "animate-slide-in-left",
          delayClass,
          "transition-all duration-800 ease-out"
        );
      case "slide-right":
        return cn(
          baseClass,
          "animate-slide-in-right",
          delayClass,
          "transition-all duration-800 ease-out"
        );
      case "scale-in":
        return cn(
          baseClass,
          "animate-scale-in",
          delayClass,
          "transition-all duration-600 ease-out"
        );
      default:
        return baseClass;
    }
  };

  return (
    <div
      ref={ref}
      id={id}
      className={cn(getAnimationClass(), className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
