"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { MoveRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "https://haneesha2018.github.io/eportfolio/ChatDoc.png",
    title: "Personal Bot - Chat with Your Documents",
    description:
    "A GPT-powered chatbot application that combines standard ChatGPT capabilities with advanced features for document interaction. Built using Streamlit, LangChain, and OpenAI, this tool enables users to upload large PDF/TXT documents and chat with their content, enhancing information retrieval and analysis.",
    skills: [
    "Python",
    "Streamlit",
    "LangChain",
    "OpenAI API",
    "FAISS Vector Database",
    ],
    link: "https://github.com/haneesha2018/personal_bot",
    },
  {
    imagePath: "https://haneesha2018.github.io/eportfolio/eventready.png",
    title: "EventReady - Webapp for Student Event Planners",
    description:
      "EventReady is a web application designed to assist new event planners in student organizations. Built using React JS, Django, Material UI, and Google Firebase, this tool increases event planning efficiency by 40% and reduces planning time by 35%.",
    skills: [
      "React JS",
      "Django",
      "Material UI",
      "SQLite",
      "Google Firebase",
    ],
    link: "https://github.com/haneesha2018/Capstone-Project",
  },
  {
    imagePath: "https://haneesha2018.github.io/eportfolio/krodash.png",
    title: "KroDash - Retail Data Dashboard Development",
    description:
      "KroDash is a Flask-based retail data dashboard deployed on Heroku. It uses Microsoft Azure PostgreSQL and SQLAlchemy to streamline data processing, enhancing Kroger's data analysis for better decision-making.",
    skills: [
      "Python",
      "HTML/CSS/JavaScript",
      "Heroku",
      "Azure PostgreSQL",
    ],
    link: "https://github.com/haneesha2018/KroDash",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="https://github.com/haneesha2018"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Project Archive
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
