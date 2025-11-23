"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

import { sendMail } from "@/services/actions";

import EnvelopeSimpleSVG from "@/assets/icons/envelope-simple.svg";
import MapPinSVG from "@/assets/icons/map-pin.svg";
import PhoneSVG from "@/assets/icons/phone.svg";

import styles from "./Contact.module.scss";

const Inputs = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Full name can only contain letters, spaces, hyphens, and apostrophes",
    )
    .trim()
    .refine(
      (name) => name.split(/\s+/).filter(Boolean).length >= 2,
      "Full name must contain at least 2 words (first and last name)",
    ),

  workEmail: z.email("Please enter a valid email address").toLowerCase().trim(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters")
    .trim(),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(Inputs),
  });

  async function onSubmit(data: z.infer<typeof Inputs>) {
    reset();

    const sendMailPromise = sendMail(data);

    await toast.promise(sendMailPromise, {
      loading: "Sending your message...",
      success: "Message has been successfuly sent!",
      error: "Something went wrong. Message has not been sent!",
    });
  }

  return (
    <section id="contact" className={styles["contact"]}>
      <h2 className={styles["contact__heading"]}>Contact</h2>

      <div className={styles["contact__body"]}>
        <div className={styles["contact__left-container"]}>
          <p className={styles["contact__title"]}>Let&apos;s have a talk!</p>

          <p className={styles["contact__description"]}>
            Looking to partner or work together?{" "}
            <br className={styles["contact__description-break"]} /> Reach out
            through the form and I&apos;ll get back to you in the next 24 hours.
          </p>

          <div className={styles["contact__contact-container"]}>
            <div className={styles["contact__contact-item"]}>
              <MapPinSVG className={styles["contact__contact-icon"]} />

              <p className={styles["contact__contact-description"]}>
                Vietnam, Da Nang
              </p>
            </div>

            <div className={styles["contact__contact-item"]}>
              <PhoneSVG className={styles["contact__contact-icon"]} />

              <p className={styles["contact__contact-description"]}>
                +84 354 290 441
              </p>
            </div>

            <div className={styles["contact__contact-item"]}>
              <EnvelopeSimpleSVG className={styles["contact__contact-icon"]} />

              <p className={styles["contact__contact-description"]}>
                contact@dikhtyar.dev
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          className={styles["contact__form"]}
        >
          <div className={styles["contact__form-left"]}>
            <div className={styles["contact__input-item"]}>
              <label
                htmlFor="full-name"
                className={styles["contact__input-label"]}
              >
                Full name
              </label>

              <div className={styles["contact__input-wrapper"]}>
                <input
                  type="text"
                  id="full-name"
                  placeholder="John Doe"
                  {...register("fullName")}
                  className={styles["contact__input"]}
                />
              </div>

              <p className={styles["contact__input-error"]}>
                {errors.fullName?.message}
              </p>
            </div>

            <div className={styles["contact__input-item"]}>
              <label
                htmlFor="work-email"
                className={styles["contact__input-label"]}
              >
                Work email
              </label>

              <div className={styles["contact__input-wrapper"]}>
                <input
                  type="email"
                  id="work-email"
                  placeholder="john.doe@gmail.com"
                  {...register("workEmail")}
                  className={styles["contact__input"]}
                />
              </div>

              <p className={styles["contact__input-error"]}>
                {errors.workEmail?.message}
              </p>
            </div>

            <div className={styles["contact__input-item"]}>
              <label
                htmlFor="message"
                className={styles["contact__input-label"]}
              >
                Message
              </label>

              <div className={styles["contact__input-wrapper"]}>
                <textarea
                  id="message"
                  {...register("message")}
                  className={styles["contact__text-area"]}
                ></textarea>
              </div>

              <p className={styles["contact__input-error"]}>
                {errors.message?.message}
              </p>
            </div>
          </div>

          <button className={styles["contact__cta"]}>Send message</button>
        </form>
      </div>
    </section>
  );
}
