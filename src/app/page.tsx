import type { Metadata } from "next";

import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import HomepageNav from "@/components/HomepageNav/HomepageNav";
import Skills from "@/components/Skills/Skills";

import danilDikhtyarIMG from "@/assets/images/danil-dikhtyar.jpg";

import ArrowRightSVG from "@/assets/icons/arrow-right.svg";
import LogoSVG from "@/assets/icons/logos/logo.svg";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Home | Danil Dikhtyar",
  description:
    "Danil Dikhtyar - Software Engineer in Da Nang, Vietnam specializing in React, Next.js and TypeScript. View my full-stack projects and contact me!",
};

export default function HomePage() {
  return (
    <div className={styles["page"]}>
      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <LogoSVG className={styles["header__icon"]} />
          <h1 className={styles["header__title"]}>Dikhtyar.dev</h1>
        </div>

        <HomepageNav />
      </header>

      <main>
        <section id="about" className={styles["hero"]}>
          <div className={styles["hero__left-container"]}>
            <div className={styles["hero__description-container"]}>
              <h2 className={styles["hero__greeting"]}>Здоровенькі Були! 👋</h2>

              <p className={styles["hero__heading"]}>
                I&apos;m{" "}
                <span className={styles["hero__name"]}>Danil Dikhtyar</span> |{" "}
                <span className={styles["hero__position"]}>
                  Software Engineer
                </span>
                <br />
                based in Đà Nẵng, Việt Nam
              </p>

              <p className={styles["hero__description"]}>
                <RoughNotationGroup show={true}>
                  My passion is designing and building{" "}
                  <RoughNotation
                    type="highlight"
                    color="#d0ebff"
                    order={1}
                    multiline={true}
                  >
                    user-friendly
                  </RoughNotation>{" "}
                  web apps that{" "}
                  <RoughNotation
                    type="highlight"
                    color="#d0ebff"
                    order={2}
                    multiline={true}
                  >
                    create seamless experiences
                  </RoughNotation>{" "}
                  and{" "}
                  <RoughNotation
                    type="highlight"
                    color="#d0ebff"
                    order={3}
                    multiline={true}
                  >
                    bring value
                  </RoughNotation>
                  .
                </RoughNotationGroup>
              </p>
            </div>

            <div className={styles["hero__cta-container"]}>
              <a
                href="mailto:contact@dikhtyar.dev"
                className={styles["hero__cta"]}
              >
                <span className={styles["hero__cta-span"]}>
                  Get in touch
                  <ArrowRightSVG className={styles["hero__cta-icon"]} />
                </span>
                <span className={styles["hero__underlined"]}>
                  contact@dikhtyar.dev
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className={styles["hero__cta"]}
              >
                View my resume
                <ArrowRightSVG className={styles["hero__cta-icon"]} />
              </a>
            </div>
          </div>

          <div className={styles["hero__image-wrapper"]}>
            <Image
              src={danilDikhtyarIMG}
              alt="Danil Dikhtyar"
              className={styles["hero__image"]}
            />
          </div>
        </section>

        <Skills />
      </main>
    </div>
  );
}
