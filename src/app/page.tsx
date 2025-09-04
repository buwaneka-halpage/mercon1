"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Optional delay for smoother transition
      setTimeout(() => setLoading(false), 8500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div>
      {loading ? (
        // 🔹 Show Terminal as Preloader
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <Terminal>
            <TypingAnimation>&gt; Initializing MERCon 2026...</TypingAnimation>

            <AnimatedSpan className="text-green-500">
              ✔ Hosted by: University of Moratuwa.
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Powered by: IEEE Sri Lanka Section
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Research Areas: Engineering | Technology | Innovation
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Venue: [loading...]
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              ✔ Dates: [loading...]
            </AnimatedSpan>

            <TypingAnimation className="text-muted-foreground">
              MERCon 2026 successfully launched.
            </TypingAnimation>

            <TypingAnimation className="text-muted-foreground">
              Redirecting to homepage...
            </TypingAnimation>
          </Terminal>
        </div>
      ) : (
        // 🔹 Show Homepage After Preloader
        <div>
          <ThemeToggle />
          <div className="w-full h-[100vh] overflow-auto flex items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to MERCon 2026 🎉</h1>
          </div>
        </div>
      )}
    </div>
  );
}
