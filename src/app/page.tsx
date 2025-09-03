import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

import { ThemeToggle } from "@/components/theme-toggle"

// Then in your JSX:

export default function Home() {
  return (
    
    <div className="w-full h-[100vh] overflow-auto flex items-center justify-center">
      
      <Terminal>
      <TypingAnimation>&gt;  Initializing MERCon 2026...</TypingAnimation>
    
      <AnimatedSpan className="text-green-500">✔ Hosted by: University of Moratuwa.</AnimatedSpan>
    
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
    
  );
}
