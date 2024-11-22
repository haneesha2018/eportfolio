"use client";
import { Button } from "@/components/ui/button";
// import { useRouter } from 'next/router';
// import getConfig from "next/config";
// import { Github, Linkedin, Mail} from "lucide-react";
// import { ModeToggle } from "@/components/ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // FontAwesome Goodreads icon
// import { AiFillBook } from "react-icons/ai";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  // const basePath =  "https://github.com/haneesha2018/eportfolio/tree/master/public"; 

  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "leadership",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        <h1 className="text-[42px] font-bold lg:text-start">
          Haneesha Dushara
        </h1>
        <h2 className="text-xl lg:text-start">
          Software Engineer
        </h2>
        <p className="text-base lg:text-start text-muted-foreground">
          I empower innovation and data-driven decision-making <br></br>
          through AI and software engineering.
          {/* I deliver actionable insights that enhance <br></br>
          decision-making and drive results. */}
        </p>
        <div className=''>
            {/* <a href={`${basePath}/Haneesha_Dushara_Full_Time_Resume.pdf`} target="_blank" rel="noopener noreferrer"> */}
            <a href={`https://haneesha2018.github.io/eportfolio/Haneesha_Dushara.pdf`} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex h-12 </a>animate-shimmer items-center justify-center rounded-md border borde</a>r-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                View My Resume
            </button>
            </a>
          </div>
      </div>
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a
          href="mailto:haneesha2018@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaEnvelope className="h-[1.2rem] w-[1.2rem]" />
            </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://github.com/haneesha2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://linkedin.com/in/haneesha-dushara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        {/* <Button variant="outline" size="icon">
          <a
          href="https://www.goodreads.com/user/show/79824790-roshni" 
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaGoodreads className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button> */}
        {/* <ModeToggle /> */}
      </ul>
    </header>
  );
}
