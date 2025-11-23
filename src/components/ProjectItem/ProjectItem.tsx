/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

"use client";

import type { StaticImageData } from "next/image";

import Image from "next/image";
import { useState } from "react";

import TagList from "@/components/TagList/TagList";

import ArrowLeftSVG from "@/assets/icons/arrow-left.svg";
import ArrowRightSVG from "@/assets/icons/arrow-right.svg";

import styles from "./ProjectItem.module.scss";

export default function ProjectItem({
  project,
}: {
  project: {
    position: string;
    title: string;
    tags: string[];
    description: string;
    images: StaticImageData[];
    video: string;
    href: string;
  };
}) {
  const [currentTab, setCurrentTab] = useState<"image" | "video">("image");
  const [currentImage, setCurrentImage] = useState(0);
  const image = project.images[currentImage]!;

  function handleSelectPreviousImage() {
    setCurrentImage((currentImage) =>
      currentImage > 0 ? currentImage - 1 : project.images.length - 1,
    );
  }

  function handleSelectNextImage() {
    setCurrentImage((currentImage) =>
      currentImage < project.images.length - 1 ? currentImage + 1 : 0,
    );
  }

  return (
    <li className={styles["project-item"]}>
      <div className={styles["project-item__body"]}>
        <div className={styles["project-item__text-content"]}>
          <p className={styles["project-item__position"]}>{project.position}</p>

          <div className={styles["project-item__container"]}>
            <h3 className={styles["project-item__title"]}>{project.title}</h3>

            <TagList tags={project.tags} />
          </div>

          <p className={styles["project-item__description"]}>
            {project.description}
          </p>
        </div>

        <div className={styles["project-item__view-button-wrapper"]}>
          <a
            href={project.href}
            target="_blank"
            className={styles["project-item__view-button"]}
          >
            View project
          </a>
        </div>
      </div>

      <div className={styles["project-item__media-container"]}>
        <div className={styles["project-item__tab-container"]}>
          <button
            onClick={() => {
              setCurrentTab("image");
            }}
            className={`${styles["project-item__tab"] ?? ""} ${(currentTab === "image" && styles["project-item__tab--open"]) || ""}`}
          >
            Image
          </button>

          <button
            onClick={() => {
              setCurrentTab("video");
            }}
            className={`${styles["project-item__tab"] ?? ""} ${(currentTab === "video" && styles["project-item__tab--open"]) || ""}`}
          >
            Video
          </button>
        </div>

        <div className={styles["project-item__media"]}>
          {currentTab === "image" ? (
            <>
              <Image
                src={image}
                alt={`Screenshot of the ${project.title} application`}
                className={styles["project-item__media-item"]}
              />

              <div className={styles["project-item__media-controls"]}>
                <button
                  onClick={handleSelectPreviousImage}
                  className={styles["project-item__media-control"]}
                >
                  <ArrowLeftSVG
                    className={styles["project-item__media-icon"]}
                  />
                </button>

                <button
                  onClick={handleSelectNextImage}
                  className={styles["project-item__media-control"]}
                >
                  <ArrowRightSVG
                    className={styles["project-item__media-icon"]}
                  />
                </button>
              </div>
            </>
          ) : (
            <video
              src={project.video}
              controls
              className={styles["project-item__media-item"]}
            ></video>
          )}
        </div>
      </div>
    </li>
  );
}
