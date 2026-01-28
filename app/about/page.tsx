"use client";

import { useState } from "react";
import { Hero } from "./components/hero";
import styles from "./styles.module.css";

interface AccordionItem {
  title: string;
  description: string[];
}

const accordionData: AccordionItem[] = [
  {
    title: "American Advertising Federation",
    description: [
      "Riverside Convention Center & Visitors Bureau - Ready Set Go Corporate Responsibility Campaign",
      "Regional/National B-to-B - Ontario International Airport - American Film Market Expo",
      "Integrated Brand Identity Campaign - Temecula Valley Balloon & Wine Festival",
      "City of Fontana Annual Report",
      "Coached Brand Identity",
      "Integrated Advertising Campaign - Regional/National B-to-B - Ontario International Airport - Puck Traffic. Fly ONT.",
      "Integrated Media Corporate Social Responsibility Campaign - 2019 Ontario State of the City",
      "Branding Campaign - Ontario International Airport",
      "Galway Spirits Package Design",
      "Galway Spirits Branding Campaign",
      "The Little Red Barn Indoor Playground Integrated Brand Identity Campaign",
      "Legends FC Media Kit",
      "Greater Ontario Convention & Visitors Bureau Annual Report",
      "Ontario Convention & Visitors Bureau Sales Promotion",
      "Law School Preparation Guide Corporate Marketing Campaign"
    ]
  },
  {
    title: "Horizon Interactive Awards",
    description: [
      "AWS X Black Girls Rock Branding Campaign",
      "For HER Campaign",
      "A Day of Action Campaign",
      "Mille Fleurs Rebrand",
      "Fontana Vendor Brochure",
      "North Wind Sun Website Design",
      "Easy IE Branding",
      "Children's Choice Marketing Campaign",
      "Ontario ICSC Print Collateral",
      "San Manuel Casino Greater Inland California Recruitment Brochure",
      "Corona Connection Magazine",
      "Coached Branding Campaign",
      "Ontario International Airport Sign Standards Guide",
      "Ontario International Airport - American Film Market Expo",
      "Ontario Living Magazine",
      "Motion Graphics / Effects - Ontario International Airport - Puck Traffic. Fly ONT.",
      "Temecula Valley Balloon & Wine Festival Advertising Integrated Campaign",
      "Public Advertising Agency Holiday Gift Out-Of-Home Promotion",
      "Shaping Wood, Shaping Artist. Sam Maloof Exhibit",
      "Riverside Country Flood Control Annual Report",
      "Galway Spirits Branding Campaign",
      "Legends FC Media Kit",
      "Winter Ad Agency Emergency Stress Kit Art Direction",
      "Ontario State of the City Integrated Campaign",
      "Temecula Magazine",
      "Huck Finn Jubilee Promotional Video",
      "Inland Empire Restaurant Week Promotional Video",
      "Inland Empire Restaurant Week Concept Development",
      "Huck Finn Jubilee Advertising Integrated Campaign",
      "Greater Ontario Convention & Visitors Bureau Annual Report",
      "Strive Landscape Branding Campaign"
    ]
  },
  {
    title: "Hermes Creative Awards",
    description: [
      "A Day of Action Campaign",
      "Hiphopoly Game Board Illustrations",
      "Riverside CVB COVID-19 Campaign",
      "Ontario International Airport - Puck Traffic. Fly ONT. Digital Ad Campaign",
      "Riverside Conservation Authority Marketing Campaign",
      "Ontario International Airport - American Film Market Expo Integrated Marketing",
      "Corona Connection Magazine",
      "Nieves Landscape Inc. Integrated Branding Campaign",
      "Ontario Art & Culture Awards Interactive Marketing Campaign",
      "Shaping Wood. Shaping Artist. Sam Maloof Integrated Marketing Campaign"
    ]
  },
  {
    title: "MarCom",
    description: [
      "Ontario International Airport Hollywood's Secret Backlot Marketing Campaign",
      "Temecula Valley Balloon & Wine Festival Branding Campaign",
      "Ontario International Airport Puck Traffic. Fly ONT. LA Kinds Campaign",
      "Mille Fleurs Rebrand"
    ]
  },
  { title: "Daughters of the American Revolution", description: ["Outstanding Cadet Medal"] }
];

const About = () => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <>
      {/* hero section */}
      <Hero />
      <div className={styles.firstSection}>
        <div className={styles.accordionWrapper}>
          <h2>Accolades</h2>
          <div className={styles.accordion}>
            {accordionData.map((item) => {
              return (
                <div key={item.title}>
                  <div className={styles.line} />
                  <h3>
                    <button
                      onClick={() => {
                        setIsOpen((previous) => {
                          if (item.title === previous) {
                            return "";
                          } else {
                            return item.title;
                          }
                        });
                      }}
                    >
                      {item.title}
                    </button>
                  </h3>
                  <div className={`${styles.content} ${isOpen === item.title ? styles.active : ""}`}>
                    {item.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {accordionData.at(-1)?.title === item.title ? <div className={styles.line} /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
