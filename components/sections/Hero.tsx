import React from "react";
import Link from "next/link";
import WatchTower from "@/components/segments/WatchTower/WatchTower";
import { H1, P, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import styles from "./hero.module.css";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${styles.heroGrid}`}
        >
          {/* Content */}
          <div
            className={`z-10 space-y-6 ${styles.heroContent} ${styles.fadeIn}`}
          >
            <div className={styles.fadeInDelay1}>
              <P>
                <Badge variant="secondary">
                  Texas-based Web Development & AI Solutions
                </Badge>
              </P>
            </div>

            <H1 className="!border-none !mt-0">
              <span className={`block ${styles.slideInLeft}`}>
                Innovative Technology
              </span>
              <span
                className={`block ${styles.gradientText} ${styles.slideInLeftDelay1}`}
              >
                for Texas Businesses
              </span>
            </H1>

            <div className={styles.fadeInDelay2}>
              <Lead className="max-w-lg">
                Empowering your business with modern web development and AI
                solutions. From dynamic ecommerce to interactive applications,
                we build technology that drives growth.
              </Lead>
            </div>

            <div className={`flex flex-wrap gap-4 pt-4 ${styles.fadeInDelay3}`}>
              <Button size="lg" className={styles.pulse} asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services" className={styles.animatedUnderline}>
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          {/* WatchTower Visual */}
          <div
            className={`relative z-10 flex justify-center lg:justify-end ${styles.heroVisual} ${styles.scaleIn}`}
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div
                className={`absolute inset-0 rounded-full blur-2xl transform scale-250 ${styles.gradientRadial}`}
              />

              {/* Rotating ring animation */}
              <div
                className={`absolute inset-0 border-2 border-dashed border-primary/30 rounded-full ${styles.rotating}`}
              />

              {/* WatchTower component */}
              <div className={`${styles.floating}`}>
                <WatchTower scale={1} />
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24 ${styles.fadeInDelay4}`}
        >
          {[
            {
              icon: "🌐",
              title: "Web Development",
              description:
                "Custom websites and applications built with modern technologies",
            },
            {
              icon: "🤖",
              title: "AI Integration",
              description:
                "Smart solutions that automate and enhance your business processes",
            },
            {
              icon: "📱",
              title: "Responsive Design",
              description:
                "Seamless experiences across all devices and screen sizes",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border ${styles.cardHover}`}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
