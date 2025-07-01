"use client";
import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

export const HeroHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-full border bg-background/50 backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Heart className="h-8 w-8 animate-pulse fill-current text-[#ff6154]" />
                  <Sparkles className="absolute -right-1 -top-1 h-4 w-4 animate-bounce text-[#ff6154]" />
                </div>
              </div>
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Get Started Button - Shows when scrolled */}
              <Link href="/sign-in">
                <Button
                  size="sm"
                  className={cn(
                    "rounded-full bg-[#ff6154] lg:inline-flex cursor-pointer",
                  )}
                >
                  Sign-In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  size="sm"
                  className={cn(
                    "rounded-full bg-[#ff6154] lg:inline-flex cursor-pointer",
                  )}
                >
                  Sign-Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
