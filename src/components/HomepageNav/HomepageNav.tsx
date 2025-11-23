"use client";

import { useState } from "react";

import ListSVG from "@/assets/icons/list.svg";
import XSVG from "@/assets/icons/x.svg";

import styles from "./HomepageNav.module.scss";

export default function HomepageNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div
      className={`${styles["homepage-nav"] ?? ""} ${isOpen ? (styles["homepage-nav--open"] ?? "") : ""}`}
    >
      <button
        onClick={handleOpenModal}
        className={styles["homepage-nav__open-btn"]}
      >
        <ListSVG
          className={`${styles["homepage-nav__icon"] ?? ""} ${styles["homepage-nav__icon--light"] ?? ""}`}
        />
      </button>

      <div className={styles["homepage-nav__body"]}>
        <button
          onClick={handleCloseModal}
          className={styles["homepage-nav__close-btn"]}
        >
          <XSVG
            className={`${styles["homepage-nav__icon"] ?? ""} ${styles["homepage-nav__icon--dark"] ?? ""}`}
          />
        </button>

        <nav className={styles["homepage-nav__nav-container"]}>
          <ul className={styles["homepage-nav__nav-list"]}>
            <li className={styles["homepage-nav__nav-item"]}>
              <a
                href="#about"
                onClick={handleCloseModal}
                className={styles["homepage-nav__nav-link"]}
              >
                About
              </a>
            </li>
            <li className={styles["homepage-nav__nav-item"]}>
              <a
                href="#skills"
                onClick={handleCloseModal}
                className={styles["homepage-nav__nav-link"]}
              >
                Skills
              </a>
            </li>
            <li className={styles["homepage-nav__nav-item"]}>
              <a
                href="#projects"
                onClick={handleCloseModal}
                className={styles["homepage-nav__nav-link"]}
              >
                Projects
              </a>
            </li>
            <li className={styles["homepage-nav__nav-item"]}>
              <a
                href="#contact"
                onClick={handleCloseModal}
                className={styles["homepage-nav__nav-link"]}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles["homepage-nav__cta-container"]}>
          <div className={styles["homepage-nav__cta-wrapper"]}>
            <a
              href="mailto:contact@dikhtyar.dev"
              className={styles["homepage-nav__cta"]}
            >
              Send a letter
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            className={`${styles["homepage-nav__cta"] ?? ""} ${styles["homepage-nav__cta--secondary"] ?? ""}`}
          >
            View resume
          </a>
        </div>
      </div>
    </div>
  );
}
