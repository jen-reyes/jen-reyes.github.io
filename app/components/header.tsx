"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const workRoute = "/work";
  const aboutRoute = "/about";
  const doodlesRoute = "/doodles";
  const contactRoute = "/contact";

  const getClassName = (route: string) => {
    return pathName === route ? styles.active : undefined;
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathName]);
  return (
    <>
      {/* desktop header */}
      <header className={`${styles.headerNav}`}>
        <div>
          <Link aria-label="home" href="/">
            Logo
          </Link>
        </div>
        <nav>
          <ul className={styles.navLinks}>
            <li className={getClassName(workRoute)}>
              <Link aria-label="home" href={workRoute}>
                Work
              </Link>
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
          <a aria-label="Linkedin" href="">
            <Linkedin />
          </a>
          <a aria-label="Instagram" href="">
            <Instagram />
          </a>
          <a aria-label="Mail" href="">
            <Mail />
          </a>
        </div>
      </header>
      {/* mobile header */}
      <div className={styles.mobileNav}>
        <header className={styles.headerNavMobile}>
          <div>
            <Link aria-label="Home" href="/">
              Logo
            </Link>
          </div>
        </header>
        <div className={`${styles.mobileNavWrapper} ${isOpen ? styles.isOpen : ""}`}>
          <button
            aria-label="hamburger menu"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
            className={styles.hamburger}
          >
            <div>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </div>
          </button>
        </div>
        <div className={`${styles.navModal} ${isOpen ? styles.modalOpen : ""} `}>
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
          <div className={`${styles.socialWrapper} ${styles.socialWrapperMobile}`}>
            <a href="">
              <Linkedin aria-label="Linkedin" />
            </a>
            <a href="">
              <Instagram aria-label="Instagram" />
            </a>
            <a href="">
              <Mail aria-label="Mail" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
