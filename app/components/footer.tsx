"use client";

import Link from "next/link";
import styles from "./footerStyles.module.css";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  const workRoute = "/work";
  const aboutRoute = "/about";
  const doodlesRoute = "/doodles";
  const contactRoute = "/contact";

  const getClassName = (route: string) => {
    return pathName === route ? styles.active : undefined;
  };

  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.navLinks}>
          <li className={getClassName(workRoute)}>
            <Link href={workRoute}>Work</Link>
          </li>
          <li className={getClassName(aboutRoute)}>
            <Link href={aboutRoute}>About</Link>
          </li>
          <li className={getClassName(doodlesRoute)}>
            <Link href={doodlesRoute}>Doodles</Link>
          </li>
          <li className={getClassName(contactRoute)}>
            <Link href={contactRoute}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={`${styles.socialWrapper}`}>
        <a href="">
          <Linkedin aria-label="Linkedin" size="2.8rem" />
        </a>
        <a href="">
          <Instagram aria-label="Instagram" size="2.8rem" />
        </a>
        <a href="">
          <Mail aria-label="Mail" size="2.8rem" />
        </a>
      </div>
    </footer>
  );
};
