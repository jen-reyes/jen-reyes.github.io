import { Key } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface Project {
  src: `/${string}`;
  title: String;
}

const Page = () => {
  const projects: Project[] = [
    { src: "/blackwood/blackwood.gif", title: "Blackwood" },
    { src: "/adayinaction/adayinaction.webp", title: "A Day of Action" },
    { src: "/galwayspirits/galwayspirits.gif", title: "Galway Spirits" },
    { src: "/forher/forher.webp", title: "For Her" },
    { src: "/mille/mille.gif", title: "Mille Fleurs" },
    { src: "/ontairport/ontairport.webp", title: "Onatario International Airport" },
    { src: "/cityofontario/cityofontario.gif", title: "City of Ontario" },
    { src: "/blackcloud/blackcloud.webp", title: "Black Cloud Tech Conference" },
    { src: "/puma/puma.gif", title: "Puma" },
    { src: "/coached/coached.webp", title: "Coached" },
    { src: "/montarey/montarey.webp", title: "Monarey Winery" },
    { src: "/tvbwf/tvbwf.webp", title: "Temecula Valley Balloon & Wine Festival" }
  ];

  return (
    <div className={styles.workWrapper}>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.title as Key}>
              <Link href="/">
                <div>
                  <span>{project.title}</span>
                </div>
                <img src={project.src} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
