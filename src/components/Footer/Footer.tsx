import EnvelopeSimpleSVG from "@/assets/icons/envelope-simple.svg";
import GitHubSVG from "@/assets/icons/logos/github.svg";
import LinkedInSVG from "@/assets/icons/logos/linkedin.svg";
import TwitterSVG from "@/assets/icons/logos/twitter.svg";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__body"]}>
        <div className={styles["footer__left-container"]}>
          <nav className={styles["footer__navigation-container"]}>
            <ul className={styles["footer__navigation-list"]}>
              <li className={styles["footer__nav-item"]}>
                <a href="#about" className={styles["footer__nav-link"]}>
                  About
                </a>
              </li>

              <li className={styles["footer__nav-item"]}>
                <a href="#skills" className={styles["footer__nav-link"]}>
                  Skills
                </a>
              </li>

              <li className={styles["footer__nav-item"]}>
                <a href="#projects" className={styles["footer__nav-link"]}>
                  Projects
                </a>
              </li>

              <li className={styles["footer__nav-item"]}>
                <a href="#contact" className={styles["footer__nav-link"]}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles["footer__cta-container"]}>
            <p className={styles["footer__cta-heading"]}>
              Interested in working together?
            </p>

            <div className={styles["footer__cta-button-container"]}>
              <div className={styles["footer__cta-button-wrapper"]}>
                <a
                  href="mailto:contact@dikhtyar.dev"
                  className={styles["footer__cta-button"]}
                >
                  Get in Touch
                </a>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                className={`${styles["footer__cta-button"] ?? ""}  ${styles["footer__cta-button--secondary"] ?? ""}`}
              >
                View resume
              </a>
            </div>
          </div>
        </div>

        <div className={styles["footer__right-container"]}>
          <div className={styles["footer__logo-container"]}>
            <ul className={styles["footer__logo-list"]}>
              <li className={styles["footer__logo-item"]}>
                <a
                  href="https://github.com/Rock-n-Roll-CRC"
                  target="_blank"
                  className={styles["footer__logo-link"]}
                >
                  <GitHubSVG className={styles["footer__logo"]} />
                </a>
              </li>

              <li className={styles["footer__logo-item"]}>
                <a
                  href="https://www.linkedin.com/in/rock-n-roll-crc/"
                  target="_blank"
                  className={styles["footer__logo-link"]}
                >
                  <LinkedInSVG className={styles["footer__logo"]} />
                </a>
              </li>

              <li className={styles["footer__logo-item"]}>
                <a
                  href="https://x.com/Rock_n_Roll_CRC"
                  target="_blank"
                  className={styles["footer__logo-link"]}
                >
                  <TwitterSVG className={styles["footer__logo"]} />
                </a>
              </li>

              <li className={styles["footer__logo-item"]}>
                <a
                  href="mailto:contact@dikhtyar.dev"
                  target="_blank"
                  className={styles["footer__logo-link"]}
                >
                  <EnvelopeSimpleSVG className={styles["footer__logo"]} />
                </a>
              </li>
            </ul>
          </div>

          <p className={styles["footer__copyright"]}>
            &copy; 2025 All rights reserved. <br />
            Built and designed by Danil Dikhtyar.
          </p>
        </div>
      </div>
    </footer>
  );
}
