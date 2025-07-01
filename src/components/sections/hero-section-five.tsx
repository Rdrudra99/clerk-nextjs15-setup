import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative text-center">
          <Link
            href="/"
            className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
          >
            <span className="text-sm text-foreground">
              Introducing CherishX App Support
            </span>
            <span className="block h-4 w-0.5 border-l bg-[#ff6154] dark:border-background dark:bg-zinc-700"></span>

            <div className="size-6 overflow-hidden rounded-full bg-[#ff6154] text-white duration-500 group-hover:bg-[#ff6154]/80">
              <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
              </div>
            </div>
          </Link>
          <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-5xl font-semibold leading-tight">
            The CherishX App
          </h1>

          <p className="mx-auto mb-8 mt-4 max-w-xl text-center text-lg leading-relaxed text-muted-foreground">
            CherishX is a web app where you can share your relationship
            challenges and get thoughtful, AI-powered solutions.
          </p>

          <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
            <Button
              asChild
              variant="default"
              className="w-full cursor-pointer rounded-full bg-[#ff6154]"
            >
              <span className="text-nowrap">Get Started</span>
            </Button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
          <img
            src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />

          <div className="rounded-(--radius) relative m-4 overflow-hidden border border-transparent bg-background shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
            <Image
              src="/hero1.png"
              alt="app screen"
              width="2880"
              height="1842"
              className="object-top-left size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
